import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary" style={{ height: 45 }}>
        <Link to="/">
          <h4 style={{ color: "white", marginLeft: 50 }}>Trello</h4>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
