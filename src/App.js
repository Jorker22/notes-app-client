import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand class="test">
              <IndexLink to="/">Education App</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>How to </NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Game App</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>



        </Navbar>
          { this.props.children }
      </div>


    );
  }
}
