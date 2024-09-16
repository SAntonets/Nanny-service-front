import React from 'react'

export default function LogInForm() {
  return (
   <form>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  )
}
