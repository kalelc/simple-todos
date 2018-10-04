import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap"

export default class New extends Component {
  render() {
    return (
      <FormGroup controlId="formControlsTextarea">
        <FormControl componentClass="textarea" placeholder="textarea" rows="4" cols="50"/>
      </FormGroup>
    );
  }
}
