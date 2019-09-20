/* eslint-disable react/prop-types */

import React from 'react';
import { alphabetizeTags } from '../../util/calculations';
import TagIndexItem from './tag_index_item';

const TagsIndex = ({ tags, openModal, deleteTag }) => {
  let tagList = alphabetizeTags(Object.values(tags));

  // Logic for this borrowed from a classmate, Alex Chui
  let firstChar;
  if (tagList.length > 0) {
    tagList = tagList.map((tag) => {
      let thing;
      if (firstChar !== tag.name[0].toUpperCase()) {
        firstChar = tag.name[0].toUpperCase();
        thing = (
          <React.Fragment key={`${firstChar}frag`}>
            <div className="tag-header" key={firstChar}>
              {tag.name[0].toUpperCase()}
            </div>
            <TagIndexItem key={tag.id} tag={tag} deleteTag={deleteTag} />
          </React.Fragment>
        );
      } else {
        thing = (
          <TagIndexItem key={tag.id} tag={tag} deleteTag={deleteTag} />
        );
      }
      return thing;
    });
  }

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
