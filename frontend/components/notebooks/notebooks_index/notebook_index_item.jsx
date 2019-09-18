/* eslint-disable react/prop-types */
import React from 'react';
import { timeSince } from '../../../util/calculations';
import { Link } from 'react-router-dom';

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
      <td><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></td>
      <td>{user.email}</td>
      <td>{timeSince(notebook.updatedAt)}</td>
      <td>
        {deleteButton}
      </td>
    </tr>
  );
};

export default NotebookIndexItem;
