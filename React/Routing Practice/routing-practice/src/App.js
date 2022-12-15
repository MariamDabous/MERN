import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import {Router} from '@reach/router';
import Home from './components/Home';
import React from "react";
import Style from './components/Style';

function App() {
  return (

    <div className="App">

      <Router>
        <Home path="/home" />
        <Hello path="/:number"/>
        <Style path= "/:word/:fontColor/:backColor"/>
      </Router>
      
    </div>
  );
}

export default App;
