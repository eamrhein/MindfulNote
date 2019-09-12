import React from 'react';


class NoteDetailForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", body: ""}
    this.timeout = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  change(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value
      })
    )
  }

  componentDidUpdate(prevProps){
    if(prevProps.note.title !== this.props.note.title){
      this.setState(this.props.note)
    }
  }

  handleSubmit(){
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.updateNote(this.state)
    }, 1000);
  }

  render(){
    const { title, body } = this.state;
    return(
      <form onKeyUp={() => this.handleSubmit()}>
        <input
          type="text"
          value={title}
          onChange={this.change('title')
        }
        />
        <textarea
          value={body}
          onChange={this.change('body')}
          />
      </form>
    );
  }
}

export default NoteDetailForm;