import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './Home.css';

export default class QuizGame extends Component {

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Robot Control</h1>
          <p>A Robot Control App</p>
        </div>
      </div>
    );
  }
}
