import React from "react";
import { AuthRoute } from "../../util/route_util";
import * as RouteConstants from "../../constants/route_constants";

import MarketingContent from "./marketing/marketing_content";
import ClosedNavBar from "./closed_nav_bar";
import SignupForm from "./session/signup_form";
import LoginForm from "./session/login_form";

const ClosedLandingPage = (props) => {
  return (
    <div>
      <header>
        <ClosedNavBar />
      </header>
      <MarketingContent />

      <AuthRoute path={ RouteConstants.LOGIN } component={ LoginForm } />
      <AuthRoute path={ RouteConstants.SIGNUP } component={ SignupForm } />
    </div>
  );
};

export default ClosedLandingPage;
