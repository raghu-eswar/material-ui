import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import appData from './commons/data.json'

class App extends Component {
  
  render(){
    return(
      <Router>
        <Header name={appData.compamyName} navLinks={appData.navigation}></Header>
        <Route path="/" exact>
          <Home subscriptions={appData.subscriptions}></Home>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route exact path="/profile/:id" render={(props)=>
          <Profile match={props.match}/>
        } />
        <Footer footerContent={appData.footerContent}></Footer>
      </Router>
    );
  }
}

export default App;