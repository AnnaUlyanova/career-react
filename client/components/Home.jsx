import React from 'react'

import About from './About'
import Timeline from './Timeline'

const about = <About />
const timeline = <Timeline />

const Home = props => {
	const linkText = props.isAbout ? 'Show About' : 'Show Career Timeline'
	return(
		<div>
			<br />
			<br />
			{props.isAbout ? timeline : about}
			<a href='#' onClick={props.renderHomepage}>{linkText}</a>
		</div>
	)
}

export default Home
