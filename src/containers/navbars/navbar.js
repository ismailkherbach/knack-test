import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import menuIcon from "../../assets/img/menu.svg";
import { connect } from "react-redux";
import { setSideBarClass } from "../../redux/actions";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  menuClick = () => {
    if (this.props.settings.sidebarClassName === "") {
      this.props.setSideBarClass("main-hidden");
    } else {
      this.props.setSideBarClass("");
    }
  };

  render() {
    return (
      <div className="navbar flex fdr aic jcfs fixed-top">
        <img
          onClick={this.menuClick}
          className="menu"
          alt="menu"
          src={menuIcon}
        />
        <div className="logo flex fdr aic jcc">
          <img
            alt="logo"
            src={
              "https://uploads-ssl.webflow.com/5f240a0c139fc4559b8ba89b/5f241c52897abc7259ff4321_Logo%20svg.svg"
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  return { settings };
};
export default withRouter(
  connect(mapStateToProps, { setSideBarClass })(Navbar)
);
