import React from "react";
import { Redirect, Route } from "react-router-dom";
import * as RouteConstants from "../constants/route_constants";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  function toRender(props) {
    if (loggedIn) {
      <Redirect to={RouteConstants.ROOT}/>
    } else {
      <Component {...props} />
    }
  }

  return <Route path={path} exact={exact} render={toRender} />
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  function toRender(props) {
    if (!loggedIn) {
      <Redirect to={RouteConstants.LOGIN} />
    } else {
      <Component {...props} />
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
