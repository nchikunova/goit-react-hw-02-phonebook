import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactsFile.module.css';

const ContactsFile = ({ contacts, onDeleteContact }) => (
  <ul className={s.contact_list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
        className={s.item_contact}
      />
    ))}
  </ul>
);

ContactsFile.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsFile;
