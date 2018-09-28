import React, { Component } from 'react';
import './index.css';

export default class Index extends Component {
  render() {
    return (
      <div className="About">
        <header className="About-header">
          <h1 className="About-title">About</h1>
        </header>
        <p className="About-intro">
          This is about
        </p>
      </div>
    );
  }
}
