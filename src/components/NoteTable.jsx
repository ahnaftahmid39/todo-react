const NoteTable = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => {
          return (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{note.priority}</td>
              <td>{note.status}</td>
              <td>{note.createdAt}</td>
              <td>{note.updatedAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NoteTable;
