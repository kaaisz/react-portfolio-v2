import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import TopPage from './components/TopPage/TopPage.jsx';
import Biography from './components/Biography/Biography.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import WorksPage from './components/WorksPage/WorksPage.jsx';
// add font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.scss';

// add library fab to export to other component
library.add(fab);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* importしたroute, switchを読み込む */}
        {/* Header.jsx内のNavlinkのpathと、App.jsのPathが一致すること */}
        <Switch>
          {/* react routerで定義されているものに基づいてpropsを定義している(おそらく) */}
          <Route exact path="/" component={TopPage} />
          <Route path="/works/:id" component={WorksPage} />
          <Route path="/biography" component={Biography} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// こう書いてもいい
// class App extends Component(上) - export default App;(下)

