const INITIAL_STATE = {
	isAbout: true
}
const reducer = (state = INITIAL_STATE, action) => {
	const newState = Object.assign({}, state)

	switch (action.type) {
		case 'TOGGLE_HOMEPAGE':
		newState.isAbout = !newState.isAbout
			return newState

		default:
		 return state
	}
}

export default reducer
