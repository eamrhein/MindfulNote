/* eslint-disable react/prop-types */
import React from 'react';
import { removeTag } from '../../actions/tag_actions'
const BottomTagItem = ({ tag, noteId, unlink, fetchTags }) => {
  function unlinkTag(e) {
    e.preventDefault();
    unlink(noteId, tag.id)
      .then((data) => {
        fetchTags();
        removeTag(data);
      });
  }

  return (
    <span className="tagbar-item">
      {tag.name}
      <i
        className="fas fa-times"
        onClick={unlinkTag}
      />
    </span>
  );
};

export default BottomTagItem;
