import React from 'react'
import { createContext } from 'react'

const cart= createContext()
const Context = (props) => {
  return (
    <cart.Provider >{props.children}</cart.Provider>
  )
}

export default Context