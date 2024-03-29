import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(loadContacts());
  const [filter, setFilter] = useState('');

  function loadContacts() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      return JSON.parse(localData);
    }
    return [];
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitContactForm = ({ name, number }) => {
    setContacts(prev => [
      ...prev,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const isNameExist = name => {
    if (!contacts) {
      return false;
    }
    return contacts.find(contact => contact.name === name);
  };

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  function filteredContacts() {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        padding: 40,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactForm
          onSubmit={handleSubmitContactForm}
          isNameExist={isNameExist}
        />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={handleFilter} />
        {contacts && (
          <ContactList list={filteredContacts()} onClick={removeContact} />
        )}
      </Section>
    </div>
  );
};

export { App };
