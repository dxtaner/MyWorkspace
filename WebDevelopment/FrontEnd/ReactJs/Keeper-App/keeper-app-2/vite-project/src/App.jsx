import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}

export default App;
