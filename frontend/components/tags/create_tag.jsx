/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

class CreateTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        name: '',
      },
    };
    this.submit = this.submit.bind(this);
  }

  change(field) {
    return (e) => (
      this.setState({
        tag: {
          [field]: e.target.value,
        },
      })
    );
  }

  submit(e) {
    const { createTag, closeModal, fetchTags } = this.props;
    e.preventDefault();
    createTag(this.state);
    fetchTags();
    closeModal();
  }

  render() {
    const { tag } = this.state;
    const { name } = tag;
    const { closeModal } = this.props;
    return (
      <div className="create-notebook">
        <div className="create-nb-header">
          <h1>Create New Tag</h1>
          <button
            type="button"
            onClick={() => closeModal()}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <form onSubmit={this.submit}>
          <p>Name:</p>
          <input
            type="text"
            placeholder="Tag name"
            value={name}
            onChange={this.change('name')}
          />
          <input type="submit" id="submit-form" className="hidden" />
        </form>
        <div className="create-btns">
          <button type="submit" className="create-notebook-btn submit">
            <label htmlFor="submit-form" type="submit">
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

export default CreateTag;
