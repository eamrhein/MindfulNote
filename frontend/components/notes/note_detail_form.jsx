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
      focus: false,
    };
    this.timeout = 0;
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.focus = this.focus.bind(this);
    this.unfocus = this.unfocus.bind(this);
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

  focus() {
    this.setState({ focus: true });
  }

  unfocus() {
    this.setState({ focus: false });
  }

  render() {
    const { title, body, focus } = this.state;
    return (
      <div className="note-form-wrapper">
        <form className="note-form">
          <input
            className="form-title"
            type="text"
            placeholder="Title"
            value={title || ''}
            onChange={this.change('title')}
            onClick={() => {
              this.unfocus();
              this.handleSubmit();
            }}
            onKeyUp={() => this.handleSubmit()}
          />
          <div className={focus ? 'form-body focused-editor' : 'form-body blurred-editor'}>
            <QuillConfig
              value={body || ''}
              onChange={this.handleBodyChange}
              theme="snow"
              onClick={() => {
                this.handleSubmit();
                this.focus();
              }}
              onKeyUp={() => this.handleSubmit()}
              onFocus={() => this.focus()}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NoteDetailForm;
