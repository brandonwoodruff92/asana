import React from "react";
import * as RouteConstants from "../../constants/route_constants";
import { NavLink } from "react-router-dom";

const ClosedNavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="left-nav">
        <NavLink id="home-btn-logo" to={ RouteConstants.CLOSED_ROOT }></NavLink>
      </div>
      <div className="right-nav">
        <NavLink id="login" to={ RouteConstants.LOGIN }>Log In</NavLink>
        <NavLink id="signup" to={ RouteConstants.SIGNUP }>Start Free Trial</NavLink>
      </div>
    </div>
  );
};

export default ClosedNavBar;
