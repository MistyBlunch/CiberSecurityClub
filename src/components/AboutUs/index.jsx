import React from 'react'
import '../../styles/AboutUs/style.css'
import arrow from '../../images/AboutUs/arrow.png'

export default function AboutUs(){
  return (
    <section className="aboutus">
      <div className="container">
        <div className="aboutus-wrapper">
          <div className="title">
            <h1>We are a student organization at UTEC dedicaded to</h1>
          </div>
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h2>Research and teach to new UTEC students</h2>
          </div>
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h2>Promote CyberSecurity and Computer Science topics</h2>
          </div>
          <div className="functions">
            <img src={arrow} alt="logo"/>
            <h2>Founder's of CTF's UTEC competing team</h2>
          </div>
        </div>
      </div>
    </section>
  );
}