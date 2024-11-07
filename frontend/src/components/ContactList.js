import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/contacts');
            setContacts(response.data);
        } catch (err) {
            console.error('Error fetching contacts', err);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        
            <div>
                <h2>Contact List</h2>
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact._id}>

                            <span>{contact.name}</span> - {contact.email} - {contact.phone}
                        </li>
                    ))}
                </ul>
            </div>
        


    );
};

export default ContactList;
