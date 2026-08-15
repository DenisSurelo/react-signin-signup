import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import './ContactItem.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className="contact-item">
      <span className="contact-name">{name}:</span>
      <span className="contact-number">{number}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
