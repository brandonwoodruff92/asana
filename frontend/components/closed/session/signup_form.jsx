import React from "react";
import { connect } from "react-redux";

import { signup } from "../../../actions/session_actions";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name
          <input type="text" value={ this.state.name } onChange={ this.update("name") } />
        </label>

        <label>
          Email
          <input type="text" value={ this.state.email } onChange={ this.update("email") } />
        </label>

        <label>
          Password
          <input type="password" value={ this.state.password } onChange={ this.update("password") } />
        </label>

        <input type="submit" value="Sign Up!" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => {
      return dispatch(signup(user));
    }
  };
}

export default connect(null, mapDispatchToProps)(SignupForm);
