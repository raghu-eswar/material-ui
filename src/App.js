import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      compamyName: "Company Name",
      navigation: ["FEATURES", "ENTERPRISE", "SUPPORT", "LOGIN"]
    }
  }
  render(){
    return(
      <Router>
        <Header name={this.state.compamyName} navLinks={this.state.navigation}></Header>
        <Route path="/">
          <Home></Home>
        </Route>
      </Router>
    );
  }
}

export default App;