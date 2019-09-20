/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { removeTag } from '../../actions/tag_actions';

const BottomTagItem = ({
  tag, noteId, unlink, fetchTags,
}) => {
  function unlinkTag(e) {
    e.preventDefault();
    unlink(noteId, tag.id)
      .then((data) => {
        fetchTags();
        removeTag(data);
      });
  }

  return (
    <Link to={`/tags/${tag.id}`}>
      <span className="tagbar-item">
        {tag.name}
        <button onClick={unlinkTag} type="button">
          <i className="fas fa-times" />
        </button>
      </span>
    </Link>
  );
};

export default BottomTagItem;
