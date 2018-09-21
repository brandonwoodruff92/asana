import React from "react";
import { connect } from "react-redux";
import SvgUtil from "../../util/svg_util";

import { logout } from "../../actions/session_actions";
import { setSelectedLink, toggleTeamOptions, toggleUserOptions, toggleAppOptions } from "../../actions/open_landing_page_actions";
import { openModal } from "../../actions/modal_actions";
import { toggleSidebar } from "../../actions/sidebar_actions";
import { fetchAllProjects, createProject } from "../../actions/project_actions";

import AppSidebar from "./app_sidebar";
import UserOptions from "./landing_page_items/user_options";
import AppOptions from "./landing_page_items/app_options";
import Index from "./index";

class OpenLandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUserOptions() {
    if (this.props.showUserOptions) {
      return (
        <UserOptions
          logout={ this.props.logout }
          toggleUserOptions={ this.props.toggleUserOptions } />
      );
    } else {
      return null;
    }
  }

  renderAppOptions() {
    if (this.props.showAppOptions) {
      return (
        <AppOptions
          openModal={ this.props.openModal }
          toggleAppOptions={ this.props.toggleAppOptions } />
      );
    } else {
      return null;
    }
  }

  render() {
    let menuButton;
    let sidebarClass;
    let contentClass;

    if (this.props.sidebar) {
      sidebarClass = "app-sidebar-show";
      contentClass = "content-closed";
      menuButton = SvgUtil.renderMenuButton("open-menu button-hidden", this.props.toggleSidebar);
    } else {
      sidebarClass = "app-sidebar-hide";
      contentClass = "content-open";
      menuButton = SvgUtil.renderMenuButton("open-menu button-show", this.props.toggleSidebar);
    }

    return (
      <div className="open-landing-page">
        <AppSidebar
          projects={ this.props.projects }
          currentUser={ this.props.currentUser }
          showTeamOptions={ this.props.showTeamOptions }
          setSelectedLink={ this.props.setSelectedLink }
          openModal={ this.props.openModal }
          toggleSidebar={ this.props.toggleSidebar }
          toggleTeamOptions={ this.props.toggleTeamOptions }
          fetchProjects={ this.props.fetchProjects }
          createProject={ this.props.createProject }
          class={ sidebarClass } />
        <div className={ `content-container ${ contentClass }` }>
          <div className="app-header">
            <div className="left-header">
              { menuButton }
              <h1 id="app-location">{ this.props.selectedLink }</h1>
            </div>
            <div className="right-header">
              <div
                className="app-options-button"
                onClick={ this.props.toggleAppOptions }>
                +
              </div>
              { this.renderAppOptions() }
              <div
                className="user-options-button"
                onClick={ this.props.toggleUserOptions }>
                BW
              </div>
              { this.renderUserOptions() }
            </div>
          </div>
          <Index />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: state.entities.projects,
    selectedLink: state.ui.openLandingPage.selectedLink,
    sidebar: state.ui.sidebar.show,
    showTeamOptions: state.ui.openLandingPage.showTeamOptions,
    showUserOptions: state.ui.openLandingPage.showUserOptions,
    showAppOptions: state.ui.openLandingPage.showAppOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects: () => {
      return dispatch(fetchAllProjects());
    },
    createProject: (project) => {
      return dispatch(createProject(project));
    },
    logout: () => {
      return dispatch(logout());
    },
    setSelectedLink: (link) => {
      return dispatch(setSelectedLink(link));
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    },
    toggleSidebar: () => {
      return dispatch(toggleSidebar());
    },
    toggleTeamOptions: () => {
      return dispatch(toggleTeamOptions());
    },
    toggleUserOptions: () => {
      return dispatch(toggleUserOptions());
    },
    toggleAppOptions: () => {
      return dispatch(toggleAppOptions());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenLandingPage);
