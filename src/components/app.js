import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

import { response } from 'express';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this);
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      }).then(response => {
        console.log("logged_in return", response);
      })
    
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    
    return (
      <div className="container">
        <Router>
        <div>
          <NavigationContainer />

          <h2>{this.state.loggedInStatus}</h2>

          <Switch>
            <Route exact path="/" component={Home} />
            

            <Route 
              path="/auth" 
              render={props =>  (
                <Auth
                  {...props}
                  handleSuccesfulLogin={this.handleSuccesfulLogin}
                  handleUnsuccesfulLogin={this.handleUnsuccesfulLogin}
                /> 
              )}
            />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        </Router>

        
      </div>
    );
  }
}
