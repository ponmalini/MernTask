import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
    
    const [contacts, setContacts] = useState([]);
  
    
    const addContact = (newContact) => {
      setContacts([...contacts, newContact]); // Add new contact to the list
    };
  return (
    <div className="App">
     
      <h1>Contact List</h1>

      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
