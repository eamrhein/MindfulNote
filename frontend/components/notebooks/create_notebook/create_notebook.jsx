/* eslint-disable jsx-a11y/label-has-associated-control */
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
    const { closeModal } = this.props;
    return (
      <div className="create-notebook">
        <div className="create-nb-header">
          <h1>Create New Notebook</h1>
          <button
            type="button"
            onClick={() => closeModal()}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <p>Notebooks are useful for grouping notes around a common topic</p>
        <form onSubmit={this.submit}>
          <div>
            <p>Name:</p>
            <input
              type="text"
              placeholder="Notebook name"
              value={title}
              onChange={this.change('title')}
            />
            <input type="submit" id="submit-form-nb" className="hidden" />
          </div>
        </form>
        <div className="create-btns">
          <button type="submit" className="create-notebook-btn submit">
            <label htmlFor="submit-form-nb" type="submit">
              Continue
            </label>
          </button>
          <button
            className="create-notebook-btn"
            type="button"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default CreateNotebook;
