import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Використовуємо dispatch для Redux
import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setUser } from "../../redux/authSlice";

const AuthProvider = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        // Якщо користувач авторизований
        const user = {
          uid: maybeUser.uid,
          email: maybeUser.email,
          displayName: maybeUser.displayName,
          photoURL: maybeUser.photoURL,
        };
        dispatch(setUser(user)); // Зберігаємо користувача в Redux
      } else {
        // Якщо користувач не авторизований, відкриваємо Google авторизацію
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((credentials) => {
            const user = credentials.user;
            dispatch(setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            }));
          })
          .catch((err) => console.error("Login error:", err));
      }
    });

    return () => unsub(); // Відписка при розмонтажі компонента
  }, [auth, dispatch]);

  return null; // Цей компонент не рендерить нічого
};

export default AuthProvider;
