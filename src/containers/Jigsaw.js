import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './Home.css';

export default class QuizGame extends Component {



  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Jigsaw Game</h1>
          <p>A Jigsaw game App</p>
        </div>
      </div>
    );
  }
}
