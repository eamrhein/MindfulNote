/* eslint-disable react/prop-types */
import React from 'react';

const TagsIndex = ({ tags, openModal }) => {
  let tagList = Object.values(tags);
  tagList = tagList.map((tag) => (
    <div key={tag.id}>
      <div>
        {tag.name}
      </div>
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
            <a onClick={() => openModal('createTag')} className="new-book">
              <i className="fas fa-book-medical" />
              <span>New Tag</span>
            </a>
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
