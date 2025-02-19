import fs from "fs";

class NotesManager {
  constructor(filePath) {
    this.filePath = filePath || "notes.json";
  }

  addNote(title, body) {
    const notes = this.loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
      notes.push({ title, body });
      this.saveNotes(notes);
      console.log(chalk.green.inverse("New note added!"));
    } else {
      console.log(chalk.red.inverse("Note title taken!"));
    }
  }

  removeNote(title) {
    const notes = this.loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
      console.log(chalk.green.inverse("Note removed!"));
      this.saveNotes(notesToKeep);
    } else {
      console.log(chalk.red.inverse("No note found!"));
    }
  }

  listNotes() {
    const notes = this.loadNotes();
    console.log(chalk.inverse("Your notes"));
    notes.forEach((note) => console.log(note.title));
  }

  readNote(title) {
    const notes = this.loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
      console.log(chalk.inverse(note.title));
      console.log(note.body);
    } else {
      console.log(chalk.red.inverse("Note not found!"));
    }
  }

  saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(this.filePath, dataJSON);
  }

  loadNotes() {
    try {
      const dataBuffer = fs.readFileSync(this.filePath);
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  }
}

export default NotesManager;
