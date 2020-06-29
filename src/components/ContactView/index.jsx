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
					<ul>
						<li>Email ➡ <a href="https://www.google.com" target="_blank">cybersecurity@utec.edu.pe</a></li>
						<li>Instagram ➡ <a href="https://www.google.com" target="_blank">cybersecurity.utec</a></li>
						<li>Faceblook ➡ <a href="https://www.google.com" target="_blank">Ciberseguridad Utec</a></li>
					</ul>
				</div>
			</div>
	</div>
	);
}

export default Contact;
