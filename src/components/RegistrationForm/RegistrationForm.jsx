import React, { useState } from 'react'
import useRegister from '../../firebse/auth/useRegister';


const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUpWithEmail, signUpWithGoogle, signUpWithApple, error } = useRegister();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    signUpWithEmail(email, password);
  };

  return (
    <div>
      <h2>Register</h2>

      {/* Реєстрація через email */}
      <form onSubmit={handleEmailSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up with Email</button>
      </form>

      {/* Реєстрація через Google */}
      <button onClick={signUpWithGoogle}>Sign Up with Google</button>

      {/* Реєстрація через Apple */}
      <button onClick={signUpWithApple}>Sign Up with Apple</button>

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default RegisterForm;