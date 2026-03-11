import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // Boş note kontrolü
    if (newNote.title.trim() === "" && newNote.content.trim() === "") {
      alert("Boş not ekleyemezsiniz!");
      return;
    }

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    alert("Not başarıyla eklendi!");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

    alert("Not silindi!");
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
