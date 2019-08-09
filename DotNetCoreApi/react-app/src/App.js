import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ShoppingList } from './Components/ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="display-3">fullstack-docker-demo</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
