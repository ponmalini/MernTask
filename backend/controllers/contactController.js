// backend/controllers/contactController.js
const Contact = require('../models/contactModel');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact({ name, email, phone });

  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getContacts, addContact };
