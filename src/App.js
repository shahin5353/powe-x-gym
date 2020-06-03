import React from 'react';
// import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Price from './Components/Pricing/Price';
import Footer from './Components/Footer/Footer';
import Membership from './Components/Membership/Membership';
import SingleClass from './Components/SingleClass/SingleClass';
import Classes from './Components/Classes/Classes';

function App() {
  return (
    <Router>

      <Header/>
    
      <Switch>
        <Route exact path='/class'>
          <Classes></Classes>
        </Route>

        <Route path='/pricing'>
          <Price></Price>
        </Route>

        <Route path='/membership/:plan'>
          <Membership></Membership>
        </Route>

        <Route path='/class/:id'>
          <SingleClass></SingleClass>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
