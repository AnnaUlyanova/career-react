import React from 'react'
import ReactDOM from "react-dom"
import spdf from "simple-react-pdf"

export default React.createClass({
	render(){
		return (
      <div className="container">
		    <spdf.SimplePDF file="CV.pdf"/>
      </div>
		)
	}
})
