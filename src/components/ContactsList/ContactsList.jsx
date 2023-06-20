import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';

const getVisibleContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getVisibleContacts(items, filter);

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        ) : (
          // <p className={s.text}>No contacts</p>
          <p>No contacts</p>
        )}
      </ul>
    </div>
  );
};
