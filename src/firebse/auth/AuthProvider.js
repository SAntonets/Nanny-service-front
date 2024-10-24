import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Використовуємо dispatch для Redux
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { clearUser, setUser } from "../../redux/authSlice";

const AuthProvider = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);


  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        const user = {
          uid: maybeUser.uid,
          email: maybeUser.email,
          displayName: maybeUser.displayName,
          photoURL: maybeUser.photoURL,
        };
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsub();
  }, [auth, dispatch]);


  return null;
};

export default AuthProvider;
