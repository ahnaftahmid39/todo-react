import { useState } from "react";
import { uid } from "uid";

const MyNoteForm = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    priority: 0,
    status: "pending",
  });

  const reset = () => {
    setNote({
      title: "",
      description: "",
      priority: 0,
      status: "pending",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      ...note,
      id: uid(16),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
    reset();
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={note.description}
        onChange={handleChange}
      />

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        name="priority"
        value={note.priority}
        onChange={handleChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={note.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
      <button type="button" onClick={reset}>
        Clear
      </button>
    </form>
  );
};

export default MyNoteForm;
