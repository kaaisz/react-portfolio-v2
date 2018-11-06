import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Artworks by SZDP</h1>
          <ul className="nav-menu">
            <li>Top</li>
            <li>Works</li>
            <li>Bio</li>
            <li>Contact</li>
            <li><a href="http://suzydp.net">suzydp.net</a></li>
          </ul>
        </header>
        <footer className="App-footer">
          <div className="footer-social">
            <ul>
              <li>(LinkedIn)</li>
              <li>(facebook)</li>
              <li>(Instagram)</li>
              <li>(dribbble)</li>
            </ul>
          </div>
          <p className="copyright">Copyright&copy; SZDP All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
