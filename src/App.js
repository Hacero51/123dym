import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Quienesomos from './components/Quienesomos';
import Asociados from './components/Asociados';
import Videos from './components/Videos';
///import Login from './components/login/Login'; <Route exact path ='/login' component = {Login}/>

function App() {
  return (
    <Router>
        <Navigation />
        <div className="container p-4">
          <Route exact path='/' component={Home} />
          <Route exact path='/alianzas' component={Asociados} />
          <Route exact path='/videos' component={Videos} />
          <Route exact path='/quienesomos' component={Quienesomos} />
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
