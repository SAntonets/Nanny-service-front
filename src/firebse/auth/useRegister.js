import { getAuth } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux";

const useRegister = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

  const signUpWhitEmail

}