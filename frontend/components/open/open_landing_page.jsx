import React from "react";
import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";

import AppSidebar from "./app_sidebar";
import Index from "./index";

const OpenLandingPage = (props) => {
  return (
    <div>
      <div className="app-header">
        <h1>Open Landing Page</h1>
        <button onClick={ props.logout }>Log Out</button>
      </div>
      <AppSidebar />
      <div className="app-content">
        <Index />
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      return dispatch(logout());
    }
  };
}

export default connect(null, mapDispatchToProps)(OpenLandingPage);
