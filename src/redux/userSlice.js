import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction('user/setUser');

const initialState = {
  user: null,
}

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
      case "user/setUser":
        return {
          ...state,
          user: action.payload,
        };
    default:
      return state;
    }
}

export default userReducer;