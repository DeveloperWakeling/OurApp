import * as React from 'react';
import { Link } from 'react-router-dom';
import MainContent from './maincontent';
import Navigation from './navigation';
import './App.css';

class App extends React.Component{
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
