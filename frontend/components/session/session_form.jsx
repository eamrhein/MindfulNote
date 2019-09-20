/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    const { formType, demoLogin } = this.props;
    if (formType === 'demo') {
      this.setState(demoLogin);
    }
  }

  componentWillUnmount() {
    const { clearErrors } = this.props;
    clearErrors();
  }

  handleUpdate(formField) {
    return (e) => this.setState({
      [formField]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    const user = { user: this.state };
    submitForm(user);
  }

  renderErrors() {
    let { errors } = this.props;
    errors = Object.values(errors);
    errors = errors.map((error, i) => <li key={i}>{error}</li>);
    return (
      <ul className="error">
        {errors}
      </ul>
    );
  }

  render() {
    const { formType, link } = this.props;
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <div className="form-head">
          <div className="form-logo">
            <i className="fas fa-brain" />
          </div>
          <div>
            <h1>Mindful </h1>
            <h1> Note</h1>
            <p>Be mindfull of important things.</p>
          </div>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <div>
              <br />
              <input
                className="session-input"
                placeholder="Email"
                type="text"
                value={email}
                onChange={this.handleUpdate('email')}
              />
              <br />
              <input
                placeholder="Password"
                className="session-input"
                type="password"
                value={password}
                onChange={this.handleUpdate('password')}
              />
              <br />
              <input className="form-btn" type="submit" value="Continue" />
            </div>
          </form>
          <div className="form-footer">
            By creating an account, you are agreeing to our Terms of Service and Privacy Policy.
            <br />
            <br />
            <br />
            <span>
              Already have a
              {' '}
              {formType}
              <div>
                Please
                {' '}
                {link}
                !
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
