// Form.js
import React, { useState } from "react";
import "./Form.css"; // Stil dosyasını import et

const initialContact = {
  fullname: "",
  phone_number: "",
  email: "",
  address: "",
};

function Form({ updateContacts, currentContacts }) {
  const [newContact, setNewContact] = useState(initialContact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContact.fullname && newContact.phone_number) {
      updateContacts([...currentContacts, newContact]);
      setNewContact(initialContact);
    } else {
      alert("Please fill in the required fields (fullname and phone number).");
    }
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={newContact.fullname}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={newContact.phone_number}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newContact.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default Form;
