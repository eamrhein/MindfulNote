import React from 'react';
import ReactQuill from 'react-quill';

const toolbar = [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'color': [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image'],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
];

const modules = {
  toolbar,
};

class QuillConfig extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <ReactQuill id="quill-editor"
        value={value}
        modules={modules}
        onChange={onChange}
        placeholder="Start Writing"
      >
      </ReactQuill>
    )
  }
}

export default QuillConfig;