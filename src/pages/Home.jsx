import React, { useState } from 'react'
import AuthForm from '../components/AuthForm.jsx/AuthForm';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Home = () => {
  const [toSignIn, setToSignIn] = useState(true);
    const toggleForm = () => {
      if (toSignIn === true) {
        setToSignIn(false);
        return;
      } else {
        setToSignIn(true);
        return;
      }
    }
  return (
    <div>
      <p>Home</p>
      <button onClick={toggleForm}>Toggle Auth Form</button>
      <div>{toSignIn ? <AuthForm /> : <RegistrationForm/>} </div>
    </div>
  )
}

export default Home;
