import React from 'react'
import Vector from './img/Vector.png'
import './style.css'
    
console.log(Vector);

export default function AboutUs(){
    return (
        <div className="AboutUs">
            <div className="Title">
                <h1>We are a student organization at UTEC dedicaded to</h1>
            </div>
            <div className="Research">
			    <img src={Vector} alt="logo"/>
                <h2>Research and teach to new UTEC students</h2>
            </div>
            <div className="Promote">
			    <img src={Vector} alt="logo"/>
                <h2>Promote CyberSecurity and Computer Science topics</h2>
            </div>
            <div className="Founder">
			    <img src={Vector} alt="logo"/>
                <h2>Founder's of CTF's UTEC competing team</h2>
            </div>
        </div>
    );
}
