import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import * as RouteConstants from "../constants/route_constants";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  function toRender(props) {
    if (loggedIn) {
      return <Redirect to={RouteConstants.APP_ROOT}/>
    } else {
      return <Component {...props} />
    }
  }

  return <Route path={path} exact={exact} render={toRender} />
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  function toRender(props) {
    if (!loggedIn) {
      return <Redirect to={RouteConstants.SPLASH_ROOT} />
    } else {
      return <Component {...props} />
    }
  }

  return <Route path={path} exact={exact} render={toRender} />
};

function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
