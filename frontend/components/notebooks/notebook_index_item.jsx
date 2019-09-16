/* eslint-disable react/prop-types */
import React from 'react';

const NotebookIndexItem = ({ notebook, deleteNotebook, user }) => {
  let deleteButton = 'Main Notebook';
  if (user.email !== notebook.title) {
    deleteButton = (
      <button
        onClick={() => deleteNotebook(notebook.id)}
        type="submit"
      >
        <i className="fas fa-trash" />
      </button>
    );
  }
  return (
    <tr key={notebook.id}>
      <td>{notebook.title}</td>
      <td>Demo</td>
      <td>{Date.now()}</td>
      <td>
        {deleteButton}
      </td>
    </tr>
  );
};

export default NotebookIndexItem;
