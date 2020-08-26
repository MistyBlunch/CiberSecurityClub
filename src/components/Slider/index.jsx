import React from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import '../../styles/Slider/style.css'
import sliders from './sliders.json'

export default class Slider extends React.Component {
  componentDidMount() {
    (function() {
      let elems = document.querySelectorAll('.slider');
      let instances = M.Slider.init(elems, { interval: 30000});
    })()
  }

  render() {
    return (
      <div className="slider fullscreen csec-princ-slider">
        <ul className="slides">
          {sliders.map(e => 
            <li key={e.id}>
              <img src={require("../../" + e.image)} alt="images" />
              <div className="caption csec-caption container">
                <h1 className="header center">
                  {e.text}
                </h1>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  };
}
