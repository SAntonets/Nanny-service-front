import React from 'react'
import { useSelector } from 'react-redux'


const UserPanel = () => {
  const user = useSelector((state) => state.auth.user)
  if (user) {
  return (
 <div>
    Hello {user.displayName}
  </div>
    )
}
  return (
    <div>Login please! </div>
  )
}

export default UserPanel