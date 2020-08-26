import React from 'react'
import '../../styles/Contact/style.css'
import flag from '../../images/Contact/flag.svg'
import mail from '../../images/general/email.png'
import ig from '../../images/general/instagram.svg'
import fb from '../../images/general/facebook.svg'

function Contact(){
  return(
    <section className="contact">
      <div className="container">
				<div className="container-wrapper">
					<img  className="flag" src={flag} alt="CyberSecurity Flag"/>
					<div className="contact">
						<div className="grid contact-content">
							<span>Email</span>
							<span>➡ </span>
							<span><a href="mailto:cybersecurity@utec.edu.pe" target="_blank" rel="noopener noreferrer">cybersecurity@utec.edu.pe</a></span>

							<span>Instagram</span>
							<span>➡ </span>
							<span><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">cybersecurity.utec</a></span>

							<span>Faceblook</span>
							<span>➡ </span>
							<span><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Ciberseguridad Utec</a></span>
						</div>
						<div className="contact-content mb">
								<a href="mailto:cybersecurity@utec.edu.pe" target="_blank" rel="noopener noreferrer">
									<img src={mail} alt="mail"/>
								</a>
								<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
									<img src={ig} alt="mail"/>
								</a>
								<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
									<img src={fb} alt="mail"/>
								</a>
							</div>
					</div>
				</div>
      </div>
    </section>
  );
}

export default Contact;
