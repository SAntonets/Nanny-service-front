import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux";

const useRegister = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

  const signUpWhitEmail = async => {
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
  }

}