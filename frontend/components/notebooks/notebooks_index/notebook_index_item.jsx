/* eslint-disable react/prop-types */
import React from 'react';
import { timeSince } from '../../../util/calculations';
import DropDown from './dropdown';
import { Link } from 'react-router-dom';

const NotebookIndexItem = ({ notebook, deleteNotebook, user }) => {
  return (
    <tr key={notebook.id}>
      <td><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></td>
      <td>{user.email}</td>
      <td>{timeSince(notebook.updatedAt)}</td>
      <td>
        <DropDown
          notebook={notebook}
          user={user}
          deleteNotebook={deleteNotebook}
        />
      </td>
    </tr>
  );
};

export default NotebookIndexItem;
