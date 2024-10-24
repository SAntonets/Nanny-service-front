import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import UserPanel from '../UserPanel/UserPanel'

const Header = () => {
  return (
    <div>
      <Navigation />
      <UserPanel />
    </div>
  )
}

export default Header