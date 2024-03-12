import { useEffect, useState } from "react";
import { uid } from "uid";
import Input from "./form-components/Input";
import Select from "./form-components/Select";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({
    id: uid(),
    title: "",
    description: "",
    priority: 3,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const [resetCounter, setResetCounter] = useState(0);

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    setNote({
      id: uid(),
      title: "",
      description: "",
      priority: 3,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setResetCounter(resetCounter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      ...note,
      id: uid(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    reset();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setNote({ ...note, title: e.target.value });
        break;
      case "description":
        setNote({ ...note, description: e.target.value });
        break;
      case "priority":
        setNote({ ...note, priority: e.target.value });
        break;
      case "status":
        setNote({ ...note, status: e.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <form>
      <Input
        label="Title"
        fieldName="title"
        onChangeHandler={handleChange}
        resetCounter={resetCounter}
      />
      <Input
        label="Description"
        fieldName="description"
        onChangeHandler={handleChange}
        resetCounter={resetCounter}
      />
      <Select
        label="Priority"
        fieldName="priority"
        onChangeHandler={handleChange}
        options={[1, 2, 3, 4, 5]}
        defaultValue={3}
        resetCounter={resetCounter}
      />
      <Select
        label="Status"
        fieldName="status"
        onChangeHandler={handleChange}
        options={["pending", "inProgress", "completed"]}
        defaultValue="pending"
        resetCounter={resetCounter}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
      <button type="button" onClick={reset}>
        Clear
      </button>
    </form>
  );
};

export default NoteForm;
