import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as RouteConstants from "../../../constants/route_constants";

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
    let sessionErrors;

    if (this.props.sessionErrors.length <= 0) {
      sessionErrors = null;
    } else {
      sessionErrors = (
        <div className="session-errors">
          <div id="error-icon">
            <p>!</p>
          </div>
          <p>{ this.props.sessionErrors[0] }</p>
        </div>
      );
    }

    return (
      <div>
        <div className="session-modal-child">
          <div className="session-modal-container">
            <Link className="session-modal-exit" to={ RouteConstants.SPLASH_ROOT }>X</Link>
            {sessionErrors}
            <form className="session-form" onSubmit={ this.handleSubmit }>
              <div className="form-content">
                <h3 className="session-header">Log In</h3>

                <label className="session-label">
                  Email Address
                  <br/>
                  <input className="session-form-input"
                    type="text" value={ this.state.email }
                    onChange={ this.update("email") }
                    placeholder="name@company.com" />
                </label>

                <label className="session-label">
                  Password
                  <br/>
                  <input className="session-form-input"
                    type="password" value={ this.state.password }
                    onChange={ this.update("password") }
                    placeholder="Password" />
                </label>

                <input className="session-submit" type="submit" value="Log In!" />

                <p id="signup-message">Don't have an account?
                  <Link id="signup-link" to={ RouteConstants.SIGNUP }> Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="session-modal-background"
          onClick={ () => this.props.history.push(RouteConstants.SPLASH_ROOT) }>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionErrors: state.errors.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => {
      return dispatch(login(user));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
