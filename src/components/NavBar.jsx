import React from 'react';
import './../App.css';

function NavBar(){
	return(
	<div class="navbar-fixed">
		<nav>
			<div class="nav-wrapper black">
			<a href="#!" class="brand-logo right red-text darken-4">CyberSecurity Club</a>
			<ul class="left hide-on-med-and-down">
			<li class="active"><a href="#!">Proyectos</a></li>
			<li class="active"><a href="#!">Competencias</a></li>
			<li class="active"><a href="#!" class="right">Miembros</a></li>
			<li class="active"><a href="#!">Pentesting</a></li>
			</ul>
			</div>
		</nav>
	</div>
);
}


export default NavBar;
