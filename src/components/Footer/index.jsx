import React from 'react';
import '../../styles/Footer/style.css'
import ig from '../../images/general/instagram.svg'
import fb from '../../images/general/facebook.svg'

function Footer() {
	return ( 
		<footer className="csec page-footer">
			<div className="container">
				<div className="footer-copyright">
					<h6 className="footer-text">
						© 2020 | CyberSecurity Club UTEC, all rights reserved.
					</h6>
					<div className="sm-contact">
						<a href="https://www.instagram.com/p/CAf0bEbHdml/" rel="noopener noreferrer" target="_blank">
							<img src={ig} alt="instagram-logo"/>
						</a>
						<a href="https://www.instagram.com/p/CAf0bEbHdml/" rel="noopener noreferrer" target="_blank">
							<img src={fb} alt="facebook-logo"/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
	