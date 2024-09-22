import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "./nanniesSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    user: userReducer,
    },
  })

