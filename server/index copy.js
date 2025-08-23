const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const contactsFile = path.join(__dirname, "contacts.json");

// ================== MYSQL CONNECTION ==================
let pool;
(async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "test",
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME || "sendevops",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("✅ MySQL Connected & Table ready");
  } catch (err) {
    console.error("❌ MySQL Connection Error:", err.message);
  }
})();

// ================== TEST ROUTE ==================
app.get("/api/contact/test", (req, res) => {
  res.json({ success: true, message: "Contact API is working ✅" });
});

// ================== CONTACT FORM ==================
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  const entry = { name, email, message, date: new Date().toISOString() };

  try {
    // Save to JSON backup
    let contacts = [];
    if (fs.existsSync(contactsFile)) {
      contacts = JSON.parse(fs.readFileSync(contactsFile, "utf-8"));
    }
    contacts.push(entry);
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.error("❌ File Save Error:", err.message);
  }

  try {
    // Save to MySQL
    if (pool) {
      await pool.query(
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
        [name, email, message]
      );
      console.log("📥 Lead saved to MySQL");
    }
  } catch (err) {
    console.error("❌ MySQL Insert Error:", err.message);
  }

  try {
    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("📧 Email sent");
  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }

  // Always respond (even if DB or email fails)
  res.json({ success: true, message: "Form submitted successfully ✅" });
});

// ================== WHATSAPP ENCRYPTED API ==================
app.get("/api/whatsapp", (req, res) => {
  const number = process.env.WHATSAPP_NUMBER;
  const defaultMsg = process.env.DEFAULT_MESSAGE || "Hello! 👋";

  if (!number) {
    return res.status(500).json({ error: "WhatsApp number not configured" });
  }

  res.json({ number, message: defaultMsg });
});

// ================== SERVER START ==================
app.listen(4000, "0.0.0.0", () => {
  console.log("✅ Server running on http://localhost:4000");
});
