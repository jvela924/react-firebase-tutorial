import React from 'react'
import { NavLink } from 'react-router-dom'

const Signedoutlinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/' />Signup</li>
      <li><NavLink to='/' />Log In</li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1' />NN</li>
    </ul>
  )
}

export default Signedoutlinks
