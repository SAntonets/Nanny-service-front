import React from 'react'
import { useSelector } from 'react-redux'

const UserPanel = () => {
  const user = useSelector(state => state.user)

  return (
 <div>
    {user?.displayName ? <><p>{user.displayName}</p> <button type="button">Log out</button></> : <><button type='button'>Log in</button> <button type="button">Registration</button></>}
  </div>
  )
}

export default UserPanel