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
import './QuizGame.css';


export default class Quiz extends Component {

  handleClick(){
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('./New SWF.htm');
  }

  handleClick2(){
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('http://localhost:8080/#/');
  }


  render() {
    return (
      <div class="Login">
  <form onSubmit={this.handleSubmit}>
   
  <Button id="yo" color="danger" block bsSize="large" onClick={this.handleClick2}>Quiz Custome</Button>

  
 
   <Button color="danger" block bsSize="large" onClick={this.handleClick}> Question</Button>
  
   </form>
   { this.props.children }
</div>

    );
  }
}
