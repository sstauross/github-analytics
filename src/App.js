import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.scss';
import Issue from './components/Issue';

function App() {
  return (
    <div>
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">DevStaff</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link 1</NavItem>
            <NavItem eventKey={2} href="#">Link 2</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <h3>All issues</h3>
        <div className="row">
          <div className="col-md-12">
            <Issue />
            <Issue />
            <Issue />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
