import styles from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch } from "react-redux";
import { getContactsThunk } from "../../redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
