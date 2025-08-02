import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
