import React from 'react'

let nextId = 8

export default React.createClass ({
  render () {
    return (
      <div>
      <input type="text" placeholder="add colour"/>
      <button onClick={() => this.props.addColor({
        id: ++nextId, name: this.state.color> ADD COLOUR </button>
      })}
      </div>
    )
  }
})
