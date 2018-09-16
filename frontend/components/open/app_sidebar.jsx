import React from "react";
import { Link } from "react-router-dom";
import * as RouteConstants from "../../constants/route_constants";

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={ RouteConstants.HOME }>Home</Link>
          </li>
          <li>
            <Link to={ RouteConstants.TASKS }>My Tasks</Link>
          </li>
        </ul>
      </div>
    );
  }
}
