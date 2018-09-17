import React from "react";
import { Link } from "react-router-dom";
import * as RouteConstants from "../../constants/route_constants";

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-sidebar">
        <div className="logo-container">
        </div>
        <ul className="sidebar-components-list">
          <div className="sidebar-section">
            <ul className="nav-list">
              <li className="sidebar-nav-link">
                <Link to={ RouteConstants.HOME }>Home</Link>
              </li>
              <li className="sidebar-nav-link">
                <Link to={ RouteConstants.TASKS }>My Tasks</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}
