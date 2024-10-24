import { browserLocalPersistence, getAuth, GoogleAuthProvider, OAuthProvider, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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

  const signInWithEmail = (email, password) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
      })
      .then((userCredential) => {
        return userCredential.user;
      })
     .catch((error) => {
       setError(error.message);
       console.log(error);
        throw error;
      });
  }


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