import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as RouteConstants from "../../../constants/route_constants";
import * as ErrorConstants from "../../../constants/error_constants";

import { login, clearSessionErrors } from "../../../actions/session_actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isHidden: true
    };

    this.errorBlocks = {
      name: false,
      email: false,
      password: false
    };

    this.errors = this.props.sessionErrors;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.sessionErrors.length > 0 && this.state.isHidden) {
      this.errors = newProps.sessionErrors;
      this.setState({
        isHidden: false
      });
    } else if (newProps.sessionErrors.length <= 0 && !this.state.isHidden) {
      this.setState({
        isHidden: true
      });
    }
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
    this.checkFields();
    const user = { email: this.state.email, password: this.state.password };
    this.props.login(user);
  }

  renderErrors() {
    const errors = (
      <div className="errors-container">
        <div id="login-email-errors"
          className={ this.errorBlocks.email ? "session-errors open" : "session-errors hidden" }>
          <div className="arrow-up"></div>
          <div id="exclamation"></div>
          <p>{ ErrorConstants.BLANK_FIELD }</p>
        </div>

        <div id="login-password-errors"
          className={ this.errorBlocks.password ? "session-errors open" : "session-errors hidden" }>
          <div className="arrow-up"></div>
          <div id="exclamation"></div>
          <p>{ ErrorConstants.BLANK_FIELD }</p>
        </div>
      </div>
    );

    this.errorBlocks = {
      email: false,
      password: false
    };

    return errors;
  }

  clearErrors() {

  }

  checkFields() {
    if (this.state.email.replace(/\s+/g, '') === "") {
      this.errorBlocks.email = true;
    }

    if (this.state.password.replace(/\s+/g, '') === "") {
      this.errorBlocks.password = true;
    }
  }

  render() {
    if (this.props.sessionErrors.length > 0) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.props.clearSessionErrors, 5000);
    }

    return (
      <div>
        <div className="session-modal-child">
          <div className="session-modal-container">
            <Link className="session-modal-exit" to={ RouteConstants.SPLASH_ROOT }>&#10005;</Link>
            { this.renderErrors() }
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

                <p id="signup-message">{"Don't have an account? "}
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
    },
    clearSessionErrors: () => {
      return dispatch(clearSessionErrors());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
