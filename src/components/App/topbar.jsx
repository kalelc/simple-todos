import React, { Component } from 'react';
import './index.css';

import About from '../About/index';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/about'> About </Link></li>
          </ul>
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}
