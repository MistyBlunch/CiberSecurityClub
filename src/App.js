import React from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Parallax from "./components/Slider/index"
import NavBar from './components/NavBar/index'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Parallax />
      {/* 
        Aquí se agregan los componentes que irán creando, en 
        este mismo ordem
      */}
    </div>
  );
}

export default App;
// 