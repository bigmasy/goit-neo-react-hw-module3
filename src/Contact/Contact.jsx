import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={styles.contactItem}>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
