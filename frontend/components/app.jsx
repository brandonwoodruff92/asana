import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import * as RouteConstants from "../constants/route_constants";

import LandingPage from "./landing_page";
import OpenLandingPage from "./open/open_landing_page";
import ClosedLandingPage from "./closed/closed_landing_page";

//App should route to two separate "containers" of pages:
// - Closed: Marketing Landing page containing login/signup forms and marketing info
// - Open: App Landing page containing the actual Asana app components

const App = () => {
  return (
    <div>
      <LandingPage />
      <AuthRoute path={ RouteConstants.CLOSED_ROOT } component={ ClosedLandingPage } />
      <ProtectedRoute path={ RouteConstants.OPEN_ROOT } component={ OpenLandingPage } />
    </div>
  );
};

export default App;
