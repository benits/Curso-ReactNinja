'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => {
  return (
    <Button
      handleClick={() => {
        alert('Procurar')
      }}>
      Search
    </Button>
  )
}

export default SearchButton
