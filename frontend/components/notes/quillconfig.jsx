/* eslint-disable react/prop-types */
import React from 'react';
import ReactQuill from 'react-quill';

const toolbar = [
  [{ font: [] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ color: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image'],
  [{ align: [] }],
  ['clean'],
];

const modules = {
  toolbar,
};

const QuillConfig = ({
  value, onChange, className, onFocus, onKeyUp,
}) => (
  <ReactQuill
    className={className}
    value={value}
    modules={modules}
    onChange={onChange}
    onKeyUp={onKeyUp}
    onFocus={onFocus}
    placeholder="Start Writing"
  />
);

export default QuillConfig;
