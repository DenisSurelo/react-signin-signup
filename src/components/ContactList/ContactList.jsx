import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items) || [];
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
