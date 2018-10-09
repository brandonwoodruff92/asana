import React from "react";
import { NavLink } from "react-router-dom";
import * as RouteConstants from "../../constants/route_constants";
import SvgUtil from "../../util/svg_util";

import TeamOptions from "./sidebar_items/team_options";
import Favorites from "./sidebar_items/favorites";
import SidebarProjectItem from "./sidebar_items/sidebar_project_item";
import SidebarProjectOptions from "./sidebar_items/sidebar_project_options";

//this.props.projects returns undefined

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.toggleSidebarProjectOptions = this.toggleSidebarProjectOptions.bind(this);
    this.toggleTeamOptions = this.toggleTeamOptions.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  handleSelect(link) {
    return () => {
      this.props.setSelectedLink(link);
    };
  }

  toggleFavorites(e) {
    e.stopPropagation();
    this.setState({
      favorites: this.state.favorites ? false : true
    });
  }

  renderFavorites() {
    if (this.state.favorites) {
      return <Favorites />;
    } else {
      return null;
    }
  }

  toggleTeamOptions(e) {
    e.stopPropagation();
    this.props.toggleTeamOptions();
  }

  renderTeamOptions() {
    if (this.props.showTeamOptions) {
      return <TeamOptions
        openModal={ this.props.openModal }
        toggleTeamOptions={ this.props.toggleTeamOptions } />;
    } else {
      return null;
    }
  }

  toggleSidebarProjectOptions(id) {
    return (e) => {
      e.stopPropagation();
      this.props.toggleSidebarProjectOptions(id);
    };
  }

  renderSidebarProjectItems() {
    return this.props.projects.map( (project) => {
      return (
        <SidebarProjectItem
          project={ project }
          showSidebarProjectOptions={ this.props.showSidebarProjectOptions }
          toggleSidebarProjectOptions={ this.toggleSidebarProjectOptions } />
      );
    });
  }

  render() {
    return (
      <div className={ this.props.class }>
        <div className="logo-container">
          <img
            id="logo-img"
            src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/3ac85a538c3fc5bb08d0206ede04ae8aa13c20b2/inapp__logo_color_ondark_horizontal.svg" />
          { SvgUtil.renderMenuButton("close-menu", this.props.toggleSidebar) }
        </div>
        <ul className="sidebar-components-list">
          <div className="sidebar-section-nav">
            <ul className="nav-list">
              <NavLink
                to={ RouteConstants.HOME }
                id="home-link"
                className="sidebar-nav-link"
                activeClassName="selected"
                onClick={ this.handleSelect("Home") }>
                { SvgUtil.renderHome() }
                <p>Home</p>
              </NavLink>
              <NavLink
                to={ RouteConstants.TASKS }
                id="tasks-link"
                className="sidebar-nav-link"
                activeClassName="selected"
                onClick={ this.handleSelect(`My Tasks in ${this.props.currentUser.team.name}`) }>
                { SvgUtil.renderCheck() }
                <p>My Tasks</p>
              </NavLink>
            </ul>
          </div>
          <div className="sidebar-section nav-dropdown">
            <div
              className="favorites-label-container"
              onClick={ this.toggleFavorites }>
              <p id="nav-dropdown-favorites">Favorites</p>
              { SvgUtil.renderCaret(this.state.favorites) }
            </div>
            { this.renderFavorites() }
          </div>
          <div className="sidebar-section">
            <ul className="nav-list">
              <div className="team-section">
                <NavLink
                  to={ RouteConstants.TEAM }
                  id="team-link"
                  className="sidebar-nav-link"
                  activeClassName="selected"
                  onClick={ this.handleSelect("Team Name") }>
                  <div className="team-section">
                    <p id="team-name">{ this.props.currentUser.team.name }</p>
                  </div>
                </NavLink>
                <p
                  id="plus-button"
                  onClick={ this.toggleTeamOptions }>+</p>
                { this.renderTeamOptions() }
              </div>
            </ul>
            <ul className="sidebar-project-list">
              { this.renderSidebarProjectItems() }
            </ul>
          </div>
        </ul>
        <div className="invite-section">
          <img
            id="invite-img"
            src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/2bc490560c88fa94960b2e4919b4e6d524245ce4/invite_peeps.png" />
          <p id="invite-text">Invite your team and start collaborating!</p>
        </div>
      </div>
    );
  }
}
