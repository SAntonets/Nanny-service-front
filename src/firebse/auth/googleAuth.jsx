import React from 'react';
import { getAuth, signInWhithPopup, GoogleAuthProvider } from 'firebase/auth/cordova';
import { useDispatch } from 'react-redux';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
        console.log('Signed in with Google: ', user);
      })
      .catch((error) => {
        console.log('Error signing in with Google', error);
      });
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );
};

export default GoogleAuth;
