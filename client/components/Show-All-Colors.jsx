import React from 'react'

export default React.createClass ({
  render () {
    return (
      <div>
        <button>Show All colors</button>
        <div>
          <h3 style={{color: props.color}}>{props.color}</h3>
          <div className='swatch' style={{backgroundColor: props.color}} />
        </div>
      </div>
    )
  }
})
