import React from 'react'

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

								<li><a href="/">Timeline</a></li>
								<li><a href="/projects">Projects</a></li>
								<li><a href="/downloadCV">Download CV</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/contact">Contact</a></li>

							</ul>

						</div>

					</div>

				</nav>
				
			</header>

		)
	}
})
