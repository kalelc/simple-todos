import React, { Component } from 'react';
import './index.css';

import Topbar from './topbar';

import New from '../App/new';
import Delete from '../App/delete';
import About from '../About/index';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Topbar />
      </div>
    );
  }
}
