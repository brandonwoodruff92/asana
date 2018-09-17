import React from "react";
import { connect } from "react-redux";
import * as RouteConstants from "../constants/route_constants";
import { Redirect } from "react-router-dom";

//Unused for now

const LandingPage = (props) => {
  let destination;

  if (props.loggedIn) {
    destination = RouteConstants.APP_ROOT;
  } else {
    destination = RouteConstants.SPLASH_ROOT;
  }

  return (
    <Redirect from="/" to={ destination } />
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export default connect(mapStateToProps, null)(LandingPage);
