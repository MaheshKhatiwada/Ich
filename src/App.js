import React from 'react';
import './App.css';
import Analyse from './components/Analyse';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from "./components/About";
import Result from "./components/Result";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path="/about">
            <About/>
            </Route>
            <Route path="/analyse">
              <Analyse/>
            </Route>
            <Route path="/contact">
              <Contacts
              />
          </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
            <Home />
           </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

