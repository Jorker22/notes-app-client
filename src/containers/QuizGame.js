import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { IndexLink } from 'react-router';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import './Login.css';
import { LinkContainer } from 'react-router-bootstrap';



export default class NotFound extends Component {

  handleClick(){
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('./Question2.htm');
  }

  render() {
    return (
      <div class="Login">
  <form onSubmit={this.handleSubmit}>
      <LinkContainer to="/RobotControll">
          <Button
          block
          bsSize="large"

          type="submit">
          Quiz Customer
          </Button>
      </LinkContainer>

   <Button color="danger" onClick={this.handleClick}> question 1  </Button>
   </form>
   { this.props.children }
</div>

    );
  }
}
