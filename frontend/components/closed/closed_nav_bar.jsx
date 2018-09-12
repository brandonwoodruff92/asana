import React from "react";
import * as RouteConstants from "../../constants/route_constants";
import { NavLink } from "react-router-dom";

const ClosedNavBar = (props) => {
  return (
    <div>
      <NavLink to={ RouteConstants.LOGIN }>Log In</NavLink>
      <NavLink to={ RouteConstants.SIGNUP }>Start Free Trial</NavLink>
    </div>
  );
};

export default ClosedNavBar;
