import React, { useEffect, useState } from "react";
import Form from "./Form.js";
import List from "./List.js";
import "./Contacts.css";
import jsonData from "./data.json";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Örneğin: fetch("https://example.com/api/data")
    // Bu örnekte veriyi JSON dosyasından alıyoruz
    setContacts(jsonData);
  }, []);

  useEffect(() => {
    // console.log("Updated Contacts:", contacts);
  }, [contacts]);

  return (
    <div id="container">
      <List contacts={contacts} />
      <Form updateContacts={setContacts} currentContacts={contacts} />
    </div>
  );
}

export default Contacts;
