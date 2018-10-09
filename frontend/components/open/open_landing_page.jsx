import React from "react";
import { connect } from "react-redux";
import SvgUtil from "../../util/svg_util";
import * as RouteConstants from "../../constants/route_constants";

import { logout } from "../../actions/session_actions";
import { setSelectedLink, toggleTeamOptions, toggleUserOptions, toggleAppOptions } from "../../actions/open_landing_page_actions";
import { openModal } from "../../actions/modal_actions";
import { toggleSidebar,toggleSidebarProjectOptions } from "../../actions/sidebar_actions";
import { fetchAllProjects, createProject } from "../../actions/project_actions";

import AppSidebar from "./app_sidebar";
import UserOptions from "./landing_page_items/user_options";
import AppOptions from "./landing_page_items/app_options";
import Index from "./index";

class OpenLandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const location = this.props.location.pathname;

    switch (location) {
      case RouteConstants.HOME:
        this.props.setSelectedLink("Home");
        break;
      case RouteConstants.TASKS:
        this.props.setSelectedLink(`My Tasks in ${this.props.currentUser.team.name}`);
        break;
      case RouteConstants.TEAM:
        this.props.setSelectedLink(this.props.currentUser.team.name);
        break;
      default:
        break;
    }
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
          showSidebarProjectOptions={ this.props.showSidebarProjectOptions }
          setSelectedLink={ this.props.setSelectedLink }
          openModal={ this.props.openModal }
          toggleSidebar={ this.props.toggleSidebar }
          toggleTeamOptions={ this.props.toggleTeamOptions }
          toggleSidebarProjectOptions={ this.props.toggleSidebarProjectOptions }
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
    projects: Object.values(state.entities.projects),
    selectedLink: state.ui.openLandingPage.selectedLink,
    sidebar: state.ui.sidebar.show,
    showTeamOptions: state.ui.openLandingPage.showTeamOptions,
    showSidebarProjectOptions: state.ui.sidebar.showSidebarProjectOptions,
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
    toggleSidebarProjectOptions: (id) => {
      return dispatch(toggleSidebarProjectOptions(id));
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
