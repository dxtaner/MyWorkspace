import Card from "./components/Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <h1>Contact List</h1>

      {contacts.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
