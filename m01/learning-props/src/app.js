'use strict'
import React, { Component } from 'react'

import Square from './Square'

class App extends Component {
  render() {
    return (
      <div className='Container'>
        {['blue', 'green', 'white', 'yellow'].map((square, index) => {
          return <Square key={index} color={square} />
        })}
      </div>
    )
  }
}

export default App
