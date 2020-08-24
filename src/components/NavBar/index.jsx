import React from 'react'
import M from 'materialize-css'
import options from 'materialize-css'
import '../../styles/Navbar/style.css'
import logo from '../../images/Navbar/Mariquita.svg'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, options);
		});
	}

	render() {
		return(
			<div className="csec navbar-fixed" >
				<nav>
					<div className="csec nav-wrapper">
						<img src={logo} alt="logo" className="iconSize"/>
						<Link to="/" className="brand-logo">
							CyberSecurity Club
						</Link>
						<a href="#!" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li className="active">
								<Link to="/teams">Teams</Link>
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
						<Link to="/teams">Teams</Link>
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
	}
};
