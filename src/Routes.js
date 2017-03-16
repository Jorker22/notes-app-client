import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import QuizGame from './containers/QuizGame'
import Jigsaw from './containers/Jigsaw'
import RobotControll from './containers/RobotControll'
import NewNote from './containers/CustomQuiz';

export default (props) => (
  <Router {...props}>
  <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="login" component={Login} />
  <Route path="QuizGame" component={QuizGame}/>
  <Route path="Jigsaw" component={Jigsaw}/>
  <Route path="RobotControll" component={RobotControll}/>


  { /* Finally, catch all unmatched routes */ }
<Route path="*" component={NotFound} />
</Route>

  </Router>
);
