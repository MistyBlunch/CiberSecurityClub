import React from 'react';
import './style.css'
import ig from './images/instagram.svg'
import fb from './images/facebook.svg'

function Footer() {
	return ( 
		<footer className="csec page-footer">
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
		</footer>
	)
}
export default Footer
	