import React from 'react'
import '../../styles/Navbar/style.css'
import logo from '../../images/Navbar/Mariquita.svg'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	
	handleOpen() {
		document.getElementById("nav-menu").style.width = "100%";
	}

	handleClose() {
		document.getElementById("nav-menu").style.width = "0%";
	}

	render() {
		return(
			<div className="csec navbar-fixed" >
				<nav>
					<div className="container">
						<div className="csec nav-wrapper">
							<img src={logo} alt="logo" className="iconSize"/>
							<Link to="/" className="brand-logo">
								CyberSecurity Club
							</Link>
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
							<span style={{fontSize:"30px",cursor:"pointer"}} className="ham-menu" onClick={this.handleOpen}>&#9776;</span>
							<div id="nav-menu" class="overlay">
								<a href="javascript:void(0)" class="closebtn" onClick={this.handleClose}>&times;</a>
								<div class="overlay-content">
								<Link id="home" className="menu-item" onClick={this.handleClose} to="/">Home</Link>
								<Link id="teams" className="menu-item" onClick={this.handleClose} to="/teams">Teams</Link>
								<Link id="about" className="menu-item" onClick={this.handleClose} to="/aboutus">About us</Link>
								<Link id="contact" className="menu-item" onClick={this.handleClose} to="/contact">Contact</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
};
