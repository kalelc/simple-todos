import React, { Component } from 'react';

import {Link } from "react-router-dom";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom";
export default class Topbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to='/new'> New </Link></li>
              <li><Link to='/delete'> Delete </Link></li>
              <li><Link to='/about'> About </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
