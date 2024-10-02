import React, { useState } from "react";
import useAuth from "../../firebse/auth/useAuth";


const AuthForm = () => {
  const { signInWithGoogle, signInWithApple, signInWithEmail, signInWithPhone, confirmCode } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handlePhoneLogin = () => {
    signInWithPhone(phoneNumber, setVerificationId);
  };

  const handleConfirmCode = () => {
    confirmCode(verificationId, verificationCode);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Email or Phone"
            // Тут ти можеш додати логіку для валідації як email так і телефона
          />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={signInWithEmail}>Sign in with Email</button>
        </div>

        <button type="button" onClick={signInWithGoogle}>Sign in with Google</button>
        <button type="button" onClick={signInWithApple}>Sign in with Apple</button>

        {/* Авторизація через телефон */}
        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="button" onClick={handlePhoneLogin}>Send verification code</button>
        </div>

        {verificationId && (
          <div>
            <input
              type="text"
              placeholder="Verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button type="button" onClick={handleConfirmCode}>Confirm code</button>
          </div>
        )}

        {/* reCAPTCHA контейнер */}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
};

export default AuthForm;