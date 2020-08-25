import React from 'react'
import '../../styles/Contact/style.css'
import flag from '../../images/Contact/flag.svg'

function Contact(){
  return(
    <section className="contact">
      <div className="container">
				<div className="container-wrapper">
					<img  className="flag" src={flag} alt="CyberSecurity Flag"/>
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
    </section>
  );
}

export default Contact;
