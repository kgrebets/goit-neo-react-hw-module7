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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (filteredContacts === null) return null;
  if (filteredContacts.length === 0) return <p>No contacts found.</p>;

  return (
    <div>
      {filteredContacts.map((c) => (
        <Contact key={c.id} contact={c} />
      ))}
    </div>
  );
}

export default ContactList;
