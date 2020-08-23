import React from 'react'
import './style.css'
import './main.js'
import logo from './images/Mariquita.svg'
import { Link } from "react-router-dom";

function NavBar(){
	return(
		<div className="csec navbar-fixed" >
			<nav className="backgroundColor">
				<div className="csec nav-wrapper backgroundColor">
					<img src={logo} alt="logo" className="iconSize"/>
					<Link to="/" className="brand-logo">
						CyberSecurity Club
					</Link>
					<a href="#!" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
						<li className="active">
							<Link to="/directives">Directives</Link>
						</li>
						<li className="active">
							<Link to="/aboutus">About us</Link>
						</li>
						<li className="active">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
			<ul className="sidenav" id="mobile-demo">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/directives">Directives</Link>
				</li>
				<li>
					<Link to="/aboutus">About us</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
