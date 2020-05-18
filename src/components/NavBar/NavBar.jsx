import React from 'react';
import './NavBar.css';
import './NavBar.js';

function NavBar(){
	return(
	<div className="navbar-fixed">
		<nav className="no-abs">
			<div className="nav-wrapper black">
				<a href="#!" className="brand-logo no-abs left cs-red darken-4">CyberSecurity Club</a>
				<a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
				<ul className="right hide-on-med-and-down">
					<li className="active"><a href="#!">Inicio</a></li>
					<li className="active"><a href="#!">Nosotros</a></li>
					<li className="active"><a href="#!">Contacto</a></li>
				</ul>
			</div>
		</nav>
		<ul class="sidenav" id="mobile-demo">
			<li><a href="#">Inicio</a></li>
			<li><a href="#">Nosotros</a></li>
			<li><a href="#">Contacto</a></li>
		</ul>
	</div>
);
}
 

export default NavBar;
