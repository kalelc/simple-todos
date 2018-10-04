import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from "react-router";

import './index.css';

import Topbar from './topbar';
import New from '../App/new';
import Delete from '../App/delete';
import About from '../About/index';

export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topbar />
          <Switch>
            <Route key="new" exact path='/new' render={(props) => { return <New {...this.props} {...props} /> }} />
            <Route key="delete" exact path='/delete' render={(props) => { return <Delete {...this.props} {...props} /> }} />
            <Route key="about" exact path='/about' render={(props) => { return <About {...this.props} {...props} /> }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
