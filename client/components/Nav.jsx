import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
	render(){
		return (
			<header>

				<nav className="navbar navbar-default navbar-fixed-top" id="main-navigation">

					<div className="container-fluid">

						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tocollapse" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>

						<div className="collapse navbar-collapse" id="tocollapse">

							<ul className="nav navbar-nav">

								<li><Link to="/">Timeline</Link></li>
								<li><Link to="/projects">Projects</Link></li>
								<li><Link to="/showCV">Download CV</Link></li>
								<li><Link to="/contact">Contact</Link></li>

							</ul>

						</div>

					</div>

				</nav>

			</header>

		)
	}
})
