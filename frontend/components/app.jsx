import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import * as RouteConstants from "../constants/route_constants";

import LandingPage from "./landing_page";
import OpenLandingPage from "./open/open_landing_page";
import ClosedLandingPage from "./closed/closed_landing_page";

//App should route to two separate "containers" of pages:
// - Closed: Marketing Landing page containing login/signup forms and marketing info
// - Open: App Landing page containing the actual Asana app components

const App = (props) => {
  let redirect;

  if (props.loggedIn) {
    redirect = <Redirect to={ RouteConstants.APP_ROOT } />;
  } else {
    redirect = <Redirect to= { RouteConstants.SPLASH_ROOT } />;
  }

  return (
    <div>
      { redirect }
      <AuthRoute path={ RouteConstants.SPLASH_ROOT } component={ ClosedLandingPage } />
      <ProtectedRoute path={ RouteConstants.APP_ROOT } component={ OpenLandingPage } />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
