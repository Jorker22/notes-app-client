import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

   handleClick2(){
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('./wix.html');
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <LinkContainer to="/QuizGame">
          <Button className="quizzs"
            block
            bsSize="large"

            type="submit">
            Learning Mission
          </Button>
          </LinkContainer>

     
   <Button color="danger" block bsSize="large" onClick={this.handleClick2}> Robot </Button>
        </form>
          { this.props.children }
      </div>

    );
  }
}
