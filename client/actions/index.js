import request from 'superagent'

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const REQUESTING_COLOR = 'REQUESTING_COLOR'
export const SHOW_ALL_COLORS = 'SHOW_ALL_COLORS'

export const getNewColor = () => {
  return dispatch => {
    dispatch(requestingColor())
    console.log('getting new color')
    const target = `http://localhost:3000/color`

    request.get(target, (err, data) => {
      if (err) return console.error(err)

      const color = JSON.parse(data.text).name
      console.log('color:', color)

      dispatch(receivingColor(color))
    })
  }
}

export const getAllColors = () => {
  return dispatch => {
    dispatch (requestingAllColors())
    const target = `http://localhost:3000/all-colors`

    request.get(target, (err, data) => {
      if (err) return console.error(err)

      const allColors = JSON.parse(data.text).name
      
      dispatch(requestingAllColors(allColors))
    })
  }
}

export const requestingColor = () => {
  return {
    type: REQUESTING_COLOR
  }
}

export const receivingColor = color => {
  return {
    type: UPDATE_COLOR,
    color
  }
}

export const requestingAllColors = allColors => {
  return {
    type: SHOW_ALL_COLORS,
    allColors
  }
}
