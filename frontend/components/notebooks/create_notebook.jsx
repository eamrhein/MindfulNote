/* eslint-disable react/prop-types */
import React from 'react';

class CreateNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.submit = this.submit.bind(this);
  }

  change(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value,
      })
    );
  }

  submit(e) {
    const { createNotebook, closeModal, fetchNotebooks } = this.props;
    e.preventDefault();
    createNotebook({ notebook: this.state });
    fetchNotebooks();
    closeModal();
  }

  render() {
    const { title } = this.state;
    return (
      <div className="create-notebook">
        <h1>Create New Notebook</h1>
        <p>Notebooks are useful for grouping notes around a common topic</p>
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Notebook name"
            value={title}
            onChange={this.change('title')}
          />
          <button type="button">Cancel</button>
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  }
}

export default CreateNotebook;
