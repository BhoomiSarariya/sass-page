import React from 'react';
import './app.scss';
import Home from './Home';
function Header() {
	return (
		<div className="header">
			<nav className="navbar navbar-inverse">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Content">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="App.js"><span>S</span>hoper</a>
				</div>
				<div className="collapse navbar-collapse" id="Content">
					<ul className="nav navbar-nav navbar-right">
						<li><a href={<Home />}>Home</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="about">About</a></li>
						<li><a href="contac-us">Contact us</a></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
export default Header;