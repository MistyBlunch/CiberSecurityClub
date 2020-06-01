import React from 'react'
import './style.css'
import './main.js'
import logo from './images/Mariquita.svg'

function NavBar(){
	return(
	<div className="navbar-fixed" >
		<nav className="backgroundColor">
			<div className="nav-wrapper backgroundColor">
			<div className="margen">
				<img src={logo} alt="logo" className="left iconSize"/>
				<a href="#!" className="brand-logo no-abs left">CyberSecurity Club</a>
				<a href="#!" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
				<ul className="right hide-on-med-and-down">
					<li className="active"><a href="#!">Directives</a></li>
					<li className="active"><a href="#!">About us</a></li>
					<li className="active"><a href="#!">Contact</a></li>
				</ul>
			</div>
			</div>
		</nav>
		<ul className="sidenav" id="mobile-demo">
			<li><a href="#!">Inicio</a></li>
			<li><a href="#!">Nosotros</a></li>
			<li><a href="#!">Contacto</a></li>
		</ul>
	</div>
	);
};

export default NavBar;
