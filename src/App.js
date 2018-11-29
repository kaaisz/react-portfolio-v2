import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import TopPage from './components/TopPage/TopPage.jsx';
import Biography from './components/Biography/Biography.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/" component={Biography} />
          <Route exact path="/" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
