import PropTypes from 'prop-types';
import './ContactsFile.css';

const ContactsFile = ({ contacts, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="item-contact">
        <p className="item-text">{name}</p>
        <p className="item-text">{number}</p>
        <button className="item-button" onClick={() => onDeleteContact(id)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsFile.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsFile;
