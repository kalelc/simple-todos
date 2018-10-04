import React, { Component } from 'react';
import './index.css';

import New from '../App/new';
import Delete from '../App/delete';
import About from '../About/index';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <Router>
        <div>
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
          <Route path='/new' component={New} />
          <Route path='/delete' component={Delete} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}
