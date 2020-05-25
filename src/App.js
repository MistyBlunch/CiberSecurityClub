import React from 'react';
import Test from './components/Test';
import NavBar from './components/NavBar/NavBar';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Test/>
    </div>
  );
}

export default App;
