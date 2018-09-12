import React from "react";
import * as RouteConstants from "../../constants/route_constants";
import { Link, NavLink } from "react-router-dom";

const ClosedNavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <NavLink id="home-btn-logo" to={ RouteConstants.CLOSED_ROOT }></NavLink>
      </div>
      <div className="nav-bar-right">
        <nav className="nav-bar-item nav-tabs">
          <NavLink className="nav-tab-item" id="login" to={ RouteConstants.LOGIN }>Log In</NavLink>
        </nav>
        <NavLink id="signup" className="nav-bar-item" to={ RouteConstants.SIGNUP }>Start Free Trial</NavLink>
      </div>
    </div>
  );
};

export default ClosedNavBar;
