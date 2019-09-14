import React from 'react';
import QuillConfig from './quillconfig';

class NoteDetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      id: this.props.note.id,
      notebookId: this.props.notebookId,
    }
    this.timeout = 0;
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.note.id !== this.props.note.id) {
      this.setState(this.props.note)
    }
  }

  handleBodyChange(value) {
    this.setState({ body: value });
  }
  change(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value
      })
    )
  }

  handleSubmit() {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.updateNote(this.state)
    }, 1000);
  }

  render() {
    if (!this.props.note) return null
    const { title, body } = this.state;
    return (
      <div className="note-form-wrapper">
        <form
          onKeyUp={() => this.handleSubmit()}
          onClick={() => this.handleSubmit()}
          className="note-form"
        >
          <input
            className="form-title"
            type="text"
            placeholder="Title"
            value={title || ''}
            onChange={this.change('title')}
          />
          <div className='form-body'>
            <QuillConfig
              value={body || ''}
              onChange={this.handleBodyChange}
              theme="snow" />

          </div>
        </form>
      </div>
    );
  }
}

export default NoteDetailForm;