import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
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
        <Route path="/">
        <Header name={this.state.compamyName} navLinks={this.state.navigation}></Header>
        </Route>
      </Router>
    );
  }
}

export default App;