import { useEffect} from "react";
import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export const AuthProvider = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
         const user = {
          uid: maybeUser.uid,
          email: maybeUser.email,
          displayName: maybeUser.displayName,
          photoURL: maybeUser.photoURL,
        };// Вибираємо тільки серіалізовані дані
        dispatch(setUser(user)); // Передаємо тільки серіалізовані дані // Якщо користувач вже авторизований
      } else {
        const provider = new GoogleAuthProvider();  // Створюємо провайдера для Google
        signInWithPopup(auth, provider)
          .then((credentials) => dispatch(setUser(credentials.user)))  // Успішна авторизація
          .catch((err) => console.error('Login error:', err));  // Обробка помилок
      }
    });

    return () => unsub();  // Відписуємося від спостерігача при розмонтажі компонента
  }, [auth, dispatch]);
  // Виводимо ім'я або "Loading"

};
