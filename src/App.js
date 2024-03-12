import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteTable from "./components/NoteTable";
import MyNoteForm from "./components/MyNoteForm";
import "./css/App.css";

const mockNotes = [
  {
    id: "f1fd83e818a883818d8",
    title: "Note 1",
    description: "Note description",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
  {
    id: "f1fd83e818a283818d8",
    title: "Note 2",
    description: "Note description",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
  {
    id: "f1fd83e818a8838138",
    title: "Note 3",
    description: "Note description",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
];

function App() {
  const [notes, setNotes] = useState(mockNotes);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="center">
      <MyNoteForm addNote={addNote} />
      {/* <NoteForm addNote={addNote} /> */}
      <NoteTable notes={notes} />
    </div>
  );
}

export default App;
