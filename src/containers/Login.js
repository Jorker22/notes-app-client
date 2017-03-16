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

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <LinkContainer to="/QuizGame">
          <Button
            block
            bsSize="large"

            type="submit">
            Quizz Game
          </Button>
          </LinkContainer>

        <LinkContainer to="/Jigsaw">
          <Button
            block
            bsSize="large"

            type="submit">
            Jigsaw Game
            </Button>
        </LinkContainer>

        <LinkContainer to="/RobotControll">
            <Button
            block
            bsSize="large"

            type="submit">
            Robot Control
            </Button>
        </LinkContainer>
        </form>
          { this.props.children }
      </div>
    );
  }
}
