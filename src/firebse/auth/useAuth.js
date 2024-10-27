import { getAuth, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react'
import { app } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { clearUser } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const auth = getAuth(app);

  const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Sign in error:", error);
    setError(error.message);
    throw error;
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


    const logout = async () => {
      try {
        await signOut(auth);
        dispatch(clearUser());
        navigate("/");
      } catch (err) {
        setError(err.message);
        throw err;
      }
    }



   return {
    signInWithEmail,
    signInWithGoogle,
    signInWithApple,
    logout,
    error,
  };
}

export default useAuth