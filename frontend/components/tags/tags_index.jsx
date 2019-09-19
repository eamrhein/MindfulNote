/* eslint-disable react/prop-types */
import React from 'react';

const TagsIndex = ({ tags, openModal, deleteTag }) => {
  let tagList = Object.values(tags);
  tagList = tagList.map((tag) => (
    <div className="tag-index-item" key={tag.id}>
      <div>{tag.name}</div>
      <button type="submit" onClick={() => deleteTag(tag.id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  ));

  return (
    <div>
      <main className="notebooks-wrapper">
        <div className="notebooks-header">
          <div>
            <h1>Tags</h1>
          </div>
          <div>
            <span />
            <button
              onClick={() => openModal('createTag')}
              className="new-book"
              type="button"
            >
              <i className="fas fa-book-medical" />
              <span>New Tag</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="tags-index">
          {tagList}
        </div>
      </main>
    </div>
  );
};

export default TagsIndex;
