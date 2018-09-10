import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Jumbotron></Jumbotron>
      </div>
    );
  }
}

export default App;
