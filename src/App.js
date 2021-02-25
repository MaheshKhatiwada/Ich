import React from 'react';
import './App.css';
import Analyse from './components/Analyse';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <BrowserRouter>
     <Switch>
       <Route path="/home">
         <Home />
       </Route>
       <Route path="/analyse">
          <Analyse/>
       </Route>
        <Route path="/contact">
        <Contact
        name="Mahesh Khatiwada"
        phone="9843474204"
        email="maheshkhatiwada17@gmail.com"
      />
      <Contact
        name="Mahesh Khatiwada"
        phone="9843474204"
        email="maheshkhatiwada17@gmail.com"
    />
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
