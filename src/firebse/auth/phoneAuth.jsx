import React from "react";
import { getAuth, RecaptchaVerifier} from "firebase/auth/cordova";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithPhoneNumber } from "firebase/auth/web-extension";
import firebase from "firebase/compat/app";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

  const setupRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  }

  const handleSentCode = () => {
    setupRecapcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setVerificationId(result.verificationId);
        console.log('Code sent');
      })
      .catch((error) => {
        console.log('Error sending code: ', error);
      })
  }

  const handleVerifyCode = () => {
    const credential = firebase.auth.PhoneAuth.Provider.credential(verificationId, verificationCode);
    auth.signInWhitCredential(credential)
      .then((result) => {
        const user = result.user;
        dispatch(setUser({
          uid: user.uid,
          phoneNumber: user.phoneNumber,
        }));
        console.log('signed in whit Phone', user)
      })
      .catch((error) => {
        console.log('Error verifying code: ', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleSentCode}>Send verification code</button>

      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Verification code"
      />
      <button onClick={handleVerifyCode}>Verify code</button>

      <div id="recapcha-container"></div>
    </div>
  );
};

export default PhoneAuth;