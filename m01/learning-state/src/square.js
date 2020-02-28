'use strict'

import React from 'react'

const Square = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        height: '100px',
        alignItems: 'center',
        textAlign: 'center',
        width: '100px'
      }}>
      <span
        style={{
          color: 'white'
        }}>
        {color}
      </span>
    </div>
  )
}

Square.defaultProps = { color: 'red' }

export default Square
