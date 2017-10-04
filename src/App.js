import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import MainContent from './maincontent';
import Navigation from './navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
