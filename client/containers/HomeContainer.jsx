import { connect } from 'react-redux'

import Home from '../components/Home'
import { toggleHomepage } from '../actions'

const mapStateToProps = state => {
  return {
    isAbout: state.isAbout
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderHomepage: () => { dispatch(toggleHomepage()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
