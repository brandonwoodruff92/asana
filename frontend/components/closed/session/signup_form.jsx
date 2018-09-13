import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as RouteConstants from "../../../constants/route_constants";

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
      <div>
        <div className="session-modal-child">
          <div className="session-modal-container">
            <Link className="session-modal-exit" to={ RouteConstants.SPLASH_ROOT }>X</Link>
            <form className="session-form" onSubmit={ this.handleSubmit }>
              <div className="form-content">
                <h3 className="session-header">Sign Up</h3>

                <label className="session-label">
                  Name
                  <br/>
                  <input className="session-form-input"
                    type="text" value={ this.state.name }
                    onChange={ this.update("name") }
                    placeholder="Name" />
                </label>

                <label className="session-label">
                  Email
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

                <input className="session-submit" type="submit" value="Sign Up!" />

                <p id="login-message">Already have an account?
                  <Link id="login-link" to={ RouteConstants.LOGIN }> Log in</Link>
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

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => {
      return dispatch(signup(user));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(SignupForm));
