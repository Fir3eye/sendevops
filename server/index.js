const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const contactsFile = path.join(__dirname, 'contacts.json');

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const entry = { name, email, message, date: new Date().toISOString() };
  let contacts = [];
  if (fs.existsSync(contactsFile)) {
    contacts = JSON.parse(fs.readFileSync(contactsFile));
  }
  contacts.push(entry);
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
  res.json({ success: true });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
