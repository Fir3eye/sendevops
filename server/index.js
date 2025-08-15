const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const contactsFile = path.join(__dirname, 'contacts.json');

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const entry = { name, email, message, date: new Date().toISOString() };
  let contacts = [];
  if (fs.existsSync(contactsFile)) {
    contacts = JSON.parse(fs.readFileSync(contactsFile));
  }
  contacts.push(entry);
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

  // Send email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: 'sudheerkumar.sen1999@gmail.com', // replace with your email
        pass: 'your-app-password',    // replace with your app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'sudheerkumar.sen1999@gmail.com', // your inbox
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));