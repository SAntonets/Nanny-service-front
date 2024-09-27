import { useEffect} from "react";
import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export const AuthProvider = () => {
  const auth = getAuth(app);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
         const user = {
          uid: maybeUser.uid,
          email: maybeUser.email,
          displayName: maybeUser.displayName,
          photoURL: maybeUser.photoURL,
        };// Вибираємо тільки серіалізовані дані

      } else {
        const provider = new GoogleAuthProvider();  // Створюємо провайдера для Google
        signInWithPopup(auth, provider)
          .then((credentials) => dispatch(setUser(credentials.user)))  // Успішна авторизація
          .catch((err) => console.error('Login error:', err));  // Обробка помилок
      }
    });

    return () => unsub();  // Відписуємося від спостерігача при розмонтажі компонента
  }, [AuthenticatorAssertionResponse]);
  // Виводимо ім'я або "Loading"

};
