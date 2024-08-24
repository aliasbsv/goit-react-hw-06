import { useState, useEffect } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  /*------  Saving and retrieving from LocalStorage ------*/
  const getInit = () => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  };

  const [contacts, setContacts] = useState(getInit);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  /*------  Function for adding contacts ------*/
  const onAddContact = (profile) => {
    const finaleProfile = { ...profile, id: nanoid() };
    setContacts([finaleProfile, ...contacts]);
  };

  /*------  Contact deletion function ------*/
  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((item) => item.id !== contactId));
    /*     setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== contactId)
    ); */
  };

  /*------  Contact filtering function ------*/
  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  /*------  Main unit ------*/
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
