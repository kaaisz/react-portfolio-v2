import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer className="App-footer">
          <p className="copyright">Copyright&copy; SZDP All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
