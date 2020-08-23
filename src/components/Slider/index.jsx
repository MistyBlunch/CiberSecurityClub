import React from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

import img1 from "./images/origin1.png"
import img2 from "./images/origin2.png"
import img3 from "./images/origin3.png"

export default class Slider extends React.Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, { interval: 30000});
    })
  }

  render() {
    return (
      <div className="slider fullscreen csec-princ-slider">
        <ul className="slides">
          <li>
            <img src={img3} alt="img_1" />
            <div className="caption csec-caption">
              <h1 className="header center">
              Cybersecurity Club<br /> is a student  organization<br/>
              at the UTEC university
              </h1>
            </div>
          </li>
          <li>
            <img src={img2} alt="img_2"/>
            <div className="caption csec-caption">
              <h1 className="header center">
                Cybersecurity Club<br /> is a student  organization<br/>
                at the UTEC university
            </h1>
            </div>
          </li>
          <li>
            <img src={img1} alt="img_3"/>
            <div className="caption csec-caption">
              <h1 className="header center">
                Cybersecurity Club<br /> is a student  organization<br/>
                at the UTEC university
              </h1>
            </div>
          </li>
        </ul>
      </div>
    );
  };
}
