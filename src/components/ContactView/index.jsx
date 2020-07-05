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
						<spam>Email</spam>
						<spam>➡ </spam>
                        <spam><a href="https://www.google.com" target="_blank">cybersecurity@utec.edu.pe</a></spam>

						<spam>Instagram</spam>
						<spam>➡ </spam>
						<spam><a href="https://www.google.com" target="_blank">cybersecurity.utec</a></spam>

						<spam>Faceblook</spam>
						<spam>➡ </spam>
						<spam><a href="https://www.google.com" target="_blank">Ciberseguridad Utec</a></spam>
					</div>
				</div>
			</div>
	</div>
	);
}

export default Contact;
