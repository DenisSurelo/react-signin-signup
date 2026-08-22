import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import { getFilteredContacts, getFilter } from '../../redux/selectors';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !number.trim()) {
      alert('Введи ім’я та номер телефону!');
      return;
    }

    dispatch(addContact(name.trim(), number.trim()));

    setName('');
    setNumber('');
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="app">
      <h1>Phone List</h1>

      <div className="form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Введи ім'я"
        />

        <input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="Введіть номер"
        />

        <button type="button" onClick={handleAdd}>
          Add Contact
        </button>
      </div>

      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Search contacts..."
        style={{ marginTop: '10px' }}
      />

      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} — {contact.number}
            </span>

            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;