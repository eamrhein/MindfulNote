/* eslint-disable react/prop-types */
import React from 'react';

const notebookIndex = ({ notebooks, openModal }) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <tr key={notebook.id}>
      <td>{notebook.title}</td>
      <td>Demo</td>
      <td>{Date.now()}</td>
    </tr>
  ));

  return (
    <main className="notebooks-wrapper">
      <div className="notebooks-header">
        <div>
          <h1>Notebooks</h1>
        </div>
        <div>
          <span>My notebook list</span>
          <a onClick={() => openModal('createNotebook') } className="new-book">
            <i className="fas fa-book-medical" />
            <span>New Notebook</span>
          </a>
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
