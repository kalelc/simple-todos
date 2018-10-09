import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from "react-router";
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.css';

import Topbar from './topbar';
import New from '../App/new';
import Delete from '../App/delete';
import About from '../About/index';

export class Index extends Component {
  componentWillMount(){
    this.props.fetchTodos();
  }
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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);