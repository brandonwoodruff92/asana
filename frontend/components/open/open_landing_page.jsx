import React from "react";
import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import { setSelectedLink } from "../../actions/open_landing_page_actions";
import { openModal } from "../../actions/modal_actions";

import AppSidebar from "./app_sidebar";
import Index from "./index";

const OpenLandingPage = (props) => {
  return (
    <div className="open-landing-page">
      <AppSidebar
        setSelectedLink={ props.setSelectedLink }
        openModal={ props.openModal } />
      <div className="content-container">
        <div className="app-header">
          <h1 id="app-location">{ props.selectedLink }</h1>
          <div className="right-header">
            <button onClick={ props.logout }>Log Out</button>
          </div>
        </div>
        <div className="app-content">
          <Index />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedLink: state.ui.openLandingPage.selectedLink
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      return dispatch(logout());
    },
    setSelectedLink: (link) => {
      return dispatch(setSelectedLink(link));
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenLandingPage);
