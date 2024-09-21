import { useEffect, useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);  // Встановлюємо початковий стан

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser);  // Якщо користувач вже авторизований
      } else {
        const provider = new GoogleAuthProvider();  // Створюємо провайдера для Google
        signInWithPopup(auth, provider)
          .then((credentials) => setUser(credentials.user))  // Успішна авторизація
          .catch((err) => console.error('Login error:', err));  // Обробка помилок
      }
    });

    return () => unsub();  // Відписуємося від спостерігача при розмонтажі компонента
  }, [auth]);

  return user ? <>{user.displayName}</> : <>Loading...</>;  // Виводимо ім'я або "Loading"

};
