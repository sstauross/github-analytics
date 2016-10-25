import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import profileImg from '../public/img/github.png';
import './App.scss';

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
            <div className="row issue-container">
              <div className="col-md-3">
                <div className="row text-center">
                  <div className="user-container">
                    <h5 className="text-center">thename</h5>
                    <img className="user-image" width="60px" src={profileImg} alt="profile" />
                  </div>
                  <div className="row reactions-container">
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-bullhorn" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">12</span><span className="reactions-icon glyphicon glyphicon-thumbs-up" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-comment" /></div>
                  </div>
                  <a className="issue-link" href="http://www.github.com">View on Github</a>
                </div>
              </div>
              <div className="col-md-9">
                <h5 className="issue-time"><span className="glyphicon glyphicon-time" /> 12 hours ago</h5>
                <h2 className="issue-title">Developing and Maintaining Open Source Software</h2>
                <p>Today we can find a ton of Open Source projects available, especially...</p>
              </div>
            </div>
            <div className="row issue-container">
              <div className="col-md-3">
                <div className="row text-center">
                  <div className="user-container">
                    <h5 className="text-center">thename</h5>
                    <img className="user-image" width="60px" src={profileImg} alt="profile" />
                  </div>
                  <div className="row reactions-container">
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-bullhorn" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">12</span><span className="reactions-icon glyphicon glyphicon-thumbs-up" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-comment" /></div>
                  </div>
                  <a className="issue-link" href="http://www.github.com">View on Github</a>
                </div>
              </div>
              <div className="col-md-9">
                <h5 className="issue-time"><span className="glyphicon glyphicon-time" /> 12 hours ago</h5>
                <h2 className="issue-title">Developing and Maintaining Open Source Software</h2>
                <p>Today we can find a ton of Open Source projects available, especially...</p>
              </div>
            </div>
            <div className="row issue-container">
              <div className="col-md-3">
                <div className="row text-center">
                  <div className="user-container">
                    <h5 className="text-center">thename</h5>
                    <img className="user-image" width="60px" src={profileImg} alt="profile" />
                  </div>
                  <div className="row reactions-container">
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-bullhorn" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">12</span><span className="reactions-icon glyphicon glyphicon-thumbs-up" /></div>
                    <div className="col-xs-4 text-center"><span className="reactions-total">2</span><span className="reactions-icon glyphicon glyphicon-comment" /></div>
                  </div>
                  <a className="issue-link" href="http://www.github.com">View on Github</a>
                </div>
              </div>
              <div className="col-md-9">
                <h5 className="issue-time"><span className="glyphicon glyphicon-time" /> 12 hours ago</h5>
                <h2 className="issue-title">Developing and Maintaining Open Source Software</h2>
                <p>Today we can find a ton of Open Source projects available, especially...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
