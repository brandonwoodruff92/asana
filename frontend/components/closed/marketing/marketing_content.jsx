import React from "react";
import { NavLink } from "react-router-dom";
import * as RouteConstants from "../../../constants/route_constants";

import AsanaStatement from "./asana_statement";
import LandingPicture from "./landing_picture";

const MarketingContent = (props) => {
  return (
    <div className="marketing-content">
      <AsanaStatement />
      <NavLink id="free-trial-button" to={ RouteConstants.SIGNUP }>
        Start Free Trial
      </NavLink>
      <LandingPicture />
    </div>
  );
};

export default MarketingContent;
