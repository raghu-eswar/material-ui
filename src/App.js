import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
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