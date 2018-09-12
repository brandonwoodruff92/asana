import React from "react";
import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";

const OpenLandingPage = (props) => {
  return (
    <div>
      <h1>Open Landing Page</h1>
      <button onClick={ props.logout }>Log Out</button>
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
