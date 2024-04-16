// List.js
import React from "react";
import "./List.css";

function List({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.fullname}</strong>
              <p>Phone: {contact.phone_number}</p>
              {contact.email && <p>Email: {contact.email}</p>}
              {contact.address && <p>Address: {contact.address}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
}

export default List;
