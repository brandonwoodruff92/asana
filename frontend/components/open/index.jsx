import React from "react";
import { Route } from "react-router-dom";
import * as RouteConstants from "../../constants/route_constants";

import HomePage from "./home/home_page";
import TaskPage from "./task/task_page";

const Index = () => {
  return (
    <div>
      <Route path={ RouteConstants.HOME } component={ HomePage } />
      <Route path={ RouteConstants.TASKS } component={ TaskPage } />
    </div>
  );
};

export default Index;
