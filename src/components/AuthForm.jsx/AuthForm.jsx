import React from "react";
import useAuth from "../../firebse/auth/useAuth";


const AuthForm = () => {
  const { signInWithGoogle, signInWithApple, signInWithEmail } = useAuth();




  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Email"
          />
          <input type="password" placeholder="Password" autoComplete="current-password" />
          <button type="button" onClick={signInWithEmail}>Sign in with Email</button>
        </div>
        <button type="button" onClick={signInWithGoogle}>Sign in with Google</button>
        <button type="button" onClick={signInWithApple}>Sign in with Apple</button>
      </form>
    </div>
  );
};

export default AuthForm;