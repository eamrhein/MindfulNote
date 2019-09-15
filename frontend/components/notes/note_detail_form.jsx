/* eslint-disable react/prop-types */
import React from 'react';
import QuillConfig from './quillconfig';

class NoteDetailForm extends React.Component {
  constructor(props) {
    super(props);
    const { note } = this.props;
    const {
      title,
      body,
      id,
      notebookId,
    } = note;
    this.state = {
      title,
      body,
      id,
      notebookId,
    };
    this.timeout = 0;
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.note.id !== state) {
  //     return props.note;
  //   }
  //   return null;
  // }

  // Should not be calling setstate in componentDidUpdate
  componentDidUpdate(prevProps) {
    const { note } = this.props;
    if (prevProps.note.id !== note.id) {
      this.setState(note);
    }
  }

  handleBodyChange(value) {
    this.setState({ body: value });
  }

  change(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value,
      })
    );
  }

  handleSubmit() {
    const { updateNote } = this.props;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      updateNote(this.state);
    }, 2000);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="note-form-wrapper">
        <form
          className="note-form"
          onKeyUp={() => this.handleSubmit()}
          onClick={() => this.handleSubmit()}
        >
          <input
            className="form-title"
            type="text"
            placeholder="Title"
            value={title || ''}
            onChange={this.change('title')}
          />
          <div className="form-body">
            <QuillConfig
              value={body || ''}
              onChange={this.handleBodyChange}
              theme="snow"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NoteDetailForm;
