/* eslint-disable react/prop-types */
import React from 'react';
import Dropdown from './dropdown';

const TagIndexItem = ({ tag, deleteTag }) => {
  return (
    <div className="tag-item">
      <Dropdown tag={tag} deleteTag={deleteTag} />
    </div>
  );
};

export default TagIndexItem;
