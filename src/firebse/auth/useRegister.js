import { createUserWithEmailAndPassword, getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";

const useRegister = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

  // Реєстрація через Email/Password
  const signUpWithEmail = async (email, password) => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  // Реєстрація через Google
  const signUpWithGoogle = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  // Реєстрація через Apple
  const signUpWithApple = async () => {
    setError(null);
    const provider = new OAuthProvider("apple.com");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    signUpWithEmail, // Переконайтеся, що функція повертається
    signUpWithGoogle,
    signUpWithApple,
    error,
  };
};

export default useRegister;