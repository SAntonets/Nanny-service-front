import { getAuth, OAuthProvider } from "firebase/auth/cordova";
import React from "react";
import { useDispatch } from "react-redux";

const AppleAuth = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleAppleSignIn = () => {
    const provider = new OAuthProvider('apple.com');
    signInWhitPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || 'Apple User',
          photoURL: user.photoURL || null,
        }));
        console.log('User signed in with Apple', user);
      })
      .catch((error) => {
        console.log('Error signing in with Apple', error);
      });
  }

  return (
    <div>
      <h2>Apple Authentication</h2>
      <button onClick={handleAppleSignIn}>Sign in with Apple</button>
    </div>
  );
};

export default AppleAuth;