/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
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

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    const user = {user: this.state};
    submitForm(user);
  }
  renderErrors() {
    let errors = Object.values(this.props.errors);
    errors = errors.map((error, i) => <li key={i} >{error}</li>)
    return (
      <ul className="error">
        {errors}
      </ul>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  handleUpdate(formField) {
    return (e) => this.setState({
      [formField]: e.currentTarget.value,
    });
  }
  componentDidMount(){
    if (this.props.formType === 'demo') {
      this.setState(this.props.demoLogin)
    };
  }
  componentWillUnmount(){
    this.props.clearErrors()
  }

  render() {
    const { formType, link } = this.props;
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <div className="form-head">
          <div className="form-logo">
            <i className="fas fa-brain"></i>
          </div>
          <div>
            <h1>Mindfull </h1>
            <h1> Note</h1>
            <p>Be mindfull of important things.</p>
          </div>
          {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <label>
              <input
                className="session-input"
                placeholder="Email"
                type="text"
                value={email}
                onChange={this.handleUpdate('email')}
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Password"
                className="session-input"
                type="password"
                value={password}
                onChange={this.handleUpdate('password')}
              />
            </label>
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
              Already have a {formType}
              <div>Please {link}!</div>
            </span>
        </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;