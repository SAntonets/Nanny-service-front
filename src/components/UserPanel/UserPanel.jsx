import React from 'react'
import { useSelector } from 'react-redux'
import useAuth from '../../firebse/auth/useAuth'

const UserPanel = () => {
  const { logout } = useAuth()
  const user = useSelector((state) => state.auth.user)
  if (user) {
  return (
 <div>
      <p>Hello {user.displayName}</p>
      <button type='button' onClick={logout}>Log Out</button>
  </div>
    )
}
  return (
    <div>Login please! </div>
  )
}

export default UserPanel