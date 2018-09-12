import React from "react";
import { connect } from "react-redux";

import { login } from "../../../actions/session_actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Email
          <input type="text" value={ this.state.email } onChange={ this.update("email") } />
        </label>

        <label>
          Password
          <input type="password" value={ this.state.password } onChange={ this.update("password") } />
        </label>

        <input type="submit" value="Log In!" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => {
      return dispatch(login(user));
    }
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
