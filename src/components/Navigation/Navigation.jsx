import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  const user = useSelector(state => state.user)
  return (
    <nav>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/nannies' >Nannies</NavLink>
      { user ? <NavLink to='/favorites' >Favorites</NavLink> : <></> }
    </nav>
  )
}
