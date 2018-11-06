import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import TopPage from './components/TopPage/TopPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopPage />
        <Footer />
      </div>
    );
  }
}

export default App;
