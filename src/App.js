import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      compamyName: "Company Name",
      navigation: [{name:"FEATURES",link:"/features"}, {name:"ENTERPRISE",link:"/enterprise"}, {name:"SUPPORT",link:"/support"}, {name:"LOGIN",link:"/login"}]
    }
  }
  render(){
    return(
      <Router>
        <Header name={this.state.compamyName} navLinks={this.state.navigation}></Header>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route exact path="/profile/:id" render={(props)=>
          <Profile match={props.match}/>
        } />
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;