import React from 'react' // eslint-disable-line no-unused-vars

import Nav from './Nav'
import HomeContainer from '../containers/HomeContainer'
import Footer from './Footer'

export default React.createClass({
	render(){
		return (
				<div>
					<div className="container">
						<Nav />
						{this.props.children}
					</div>
					<Footer />
				</div>
		)
	}
})
