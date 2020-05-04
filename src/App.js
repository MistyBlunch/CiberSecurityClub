import React from 'react';
import logo from './CS_logo.jpeg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bb como te va?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          este es un link no? 
        </a>
      </header>
    </div>
  );
}

export default App;
