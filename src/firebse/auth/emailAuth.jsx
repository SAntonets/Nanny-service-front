import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ErrorMessage from "../../components/ErrorMesage/ErrorMesage";

const EmailAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }))
      console.log('Signed in with Email: ' + user.email)
      })
      .catch((error) => {
        console.log('Error signing in with Email: ' + error.message)
      })
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In with Email</button>
    </div>
  )
}

export default EmailAuth;