import React from 'react'
import '../../styles/AboutUs/style.css'
import arrow from '../../images/AboutUs/arrow.png'

export default function AboutUs(){
  return (
    <section className="aboutus">
      <div className="container">
        <div className="title">
          <h1>We are a student organization at UTEC dedicaded to</h1>
        </div>
        <div className="aboutus-wrapper">  
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h4>Research and teach to new UTEC students</h4>
          </div>
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h4>Promote CyberSecurity and Computer Science topics</h4>
          </div>
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h4>Founder's of CTF's UTEC competing team</h4>
          </div>
        </div>
      </div>
    </section>
  );
}