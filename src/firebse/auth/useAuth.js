import { getAuth, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';

const useAuth = () => {

  const [error, setError] = useState(null);
  const auth = getAuth(app);

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
     .catch((error) => {
        setError(error.message);
        throw error;
      });
  }

  const signInWithPhone = async (phoneNumber, setVerificationId) => {
  const auth = getAuth();

  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          console.log("reCAPTCHA пройдено");
        }
      },
      auth
    );
  }

  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    setVerificationId(confirmationResult.verificationId);
  } catch (error) {
    console.error('Помилка входу через телефон:', error);
  }
};


const confirmCode = async (verificationId, verificationCode) => {
  const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
  try {
    await getAuth().signInWithCredential(credential);
    console.log("Вхід виконано успішно");
  } catch (error) {
    console.error('Помилка при підтвердженні коду:', error);
  }
};

   const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        return result.user;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      });
  };

  const signInWithApple = () => {
    const provider = new OAuthProvider('apple.com');
    return signInWithPopup(auth, provider)
      .then((result) => {
        return result.user;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      });
  };



   return {
    signInWithEmail,
    signInWithPhone,
    confirmCode,
    signInWithGoogle,
    signInWithApple,
    error,
  };
}

export default useAuth