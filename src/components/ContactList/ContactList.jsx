import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

function ContactList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  console.log("render");

  return (
    <div className={styles.container}>
      <h2>Contacts</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && <p className={styles.error}>{error}</p>}

      {!loading && !error && filteredContacts.length > 0 && (
        <div>
          {filteredContacts.map((c) => (
            <Contact key={c.id} contact={c} />
          ))}
        </div>
      )}

      {!loading && !error && filteredContacts.length === 0 && (
        <p className={styles.emptyMessage}>No contacts found.</p>
      )}
    </div>
  );
}

export default ContactList;
