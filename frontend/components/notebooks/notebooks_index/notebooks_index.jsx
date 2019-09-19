/* eslint-disable react/prop-types */
import React from 'react';
import NotebookIndexItem from './notebook_index_item';

const notebookIndex = ({
  notebooks, openModal, deleteNotebook, user,
}) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <NotebookIndexItem
      user={user}
      key={notebook.id}
      notebook={notebook}
      deleteNotebook={deleteNotebook}
    />
  ));

  return (
    <main className="notebooks-wrapper">
      <div className="notebooks-header">
        <div>
          <h1>Notebooks</h1>
        </div>
        <div>
          <span>My notebook list</span>
          <button
            onClick={() => openModal('createNotebook')}
            className="new-book"
            type="button"
          >
            <i className="fas fa-book-medical" />
            <span>New Notebook</span>
          </button>
        </div>
      </div>
      <hr />
      <div className="notebook-table">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Created By</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
            {notebookList}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default notebookIndex;
