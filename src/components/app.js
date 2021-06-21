import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/BLog";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

        <Router>
        <div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
        </Router>

        <h1>Pro gamer moment</h1>
        <h2>ello</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
