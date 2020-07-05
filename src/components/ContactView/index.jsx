import React from 'react'
import './style.css'
import './main.js'
import logo from './images/Sticker.svg'

function Contact(){
	return(
	<div className="container">
			<div className="container-flag">
				<img  className="logo" src={logo} alt="CyberSecurity Flag"/>
				<div className="contact">
					<div className="grid">
						<span>Email</span>
						<span>➡ </span>
                        <span><a href="https://www.google.com" target="_blank">cybersecurity@utec.edu.pe</a></span>

						<span>Instagram</span>
						<span>➡ </span>
						<span><a href="https://www.google.com" target="_blank">cybersecurity.utec</a></span>

						<span>Faceblook</span>
						<span>➡ </span>
						<span><a href="https://www.google.com" target="_blank">Ciberseguridad Utec</a></span>
					</div>
				</div>
			</div>
	</div>
	);
}

export default Contact;
