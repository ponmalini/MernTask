// client/src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newContact = { name, email, phone };
      const response = await axios.post('http://localhost:5000/contacts', newContact);
      onAdd(response.data);  // Update the contact list in the parent component
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error('Error adding contact', err);
    }
  };

  return (
    <div style={{backgroundColor:"blue"}}>
    <form onSubmit={handleSubmit}>
        
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
    </div>
  );
};

export default ContactForm;
