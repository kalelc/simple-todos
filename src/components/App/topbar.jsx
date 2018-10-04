import React, { Component } from 'react';


import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom";
export default class Topbar extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem eventKey={1}>
            <Link to='/new'> New </Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/delete'> Delete </Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/about'> About </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
