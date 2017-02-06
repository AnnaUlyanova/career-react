import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import App from './components/App'
import HomeContainer from './containers/HomeContainer'
import Project from './components/Project'
import Contact from './components/Contact'
import ShowCV from './components/ShowCV'

import reducers from './reducers'

let store = createStore(
	reducers, compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

document.addEventListener('DOMContentLoaded', () => {
	render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component = {HomeContainer}/>
					<Route path='/projects' component={Project} />
					<Route path='/showCV' component={ShowCV} />
					<Route path='/contact' component={Contact} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	)
})
