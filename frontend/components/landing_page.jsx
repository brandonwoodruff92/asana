import React from "react";
import { connect } from "react-redux";
import * as RouteConstants from "../constants/route_constants";
import { Redirect } from "react-router-dom";


const LandingPage = (props) => {
  let destination;

  if (props.loggedIn) {
    destination = RouteConstants.OPEN_ROOT;
  } else {
    destination = RouteConstants.CLOSED_ROOT;
  }

  return (
    <Redirect from="/" to={ destination } />
  );
};

function mapStateToProps(state, oldProps) {
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export default connect(mapStateToProps, null)(LandingPage);
