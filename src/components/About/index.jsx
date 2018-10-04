import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class Index extends Component {
  render() {
    return (
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.
      </Alert>
    );
  }
}
