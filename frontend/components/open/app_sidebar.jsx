import React from "react";
import { NavLink } from "react-router-dom";
import * as RouteConstants from "../../constants/route_constants";
import SvgUtil from "../../util/svg_util";

import TeamOptions from "./sidebar_items/team_options";
import Favorites from "./sidebar_items/favorites";

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: false,
      favorites: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.toggleNewProject = this.toggleNewProject.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
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

  toggleNewProject(e) {
    e.stopPropagation();
    this.setState({
      newProject: this.state.newProject ? false : true
    });
  }

  renderTeamOptions() {
    if (this.state.newProject) {
      return <TeamOptions openModal={ this.props.openModal } />;
    } else {
      return null;
    }
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
                <img
                  id="home-img"
                  src="/assets/home.svg" />
                <p>Home</p>
              </NavLink>
              <NavLink
                to={ RouteConstants.TASKS }
                id="tasks-link"
                className="sidebar-nav-link"
                activeClassName="selected"
                onClick={ this.handleSelect("My Tasks") }>
                <img
                  id="tasks-img"
                  src="/assets/right.svg" />
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
                    <p id="team-name">Team Name</p>
                  </div>
                </NavLink>
                <p
                  id="plus-button"
                  onClick={ this.toggleNewProject }>+</p>
                { this.renderTeamOptions() }
              </div>
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
