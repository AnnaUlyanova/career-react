import React from 'react'
import ReactDOM from "react-dom"
import spdf from "simple-react-pdf"

export default React.createClass({
	render(){
		return (
      <div className="container">

				<a className="btn btn-default get-cv" href='http://localhost:3000/downloadCV'>Download PDF</a>
		    <spdf.SimplePDF file="CV.pdf"/>
      </div>
		)
	}
})
