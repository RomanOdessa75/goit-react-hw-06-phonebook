import React from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

export default function App() {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
