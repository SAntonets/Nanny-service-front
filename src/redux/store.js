import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  nannies: [],
  favoriteNannies: [],
  user: null,
  filtres: {
    minPricePerHour: 0,
    maxPricePerHour: 10000,
    sortByAlphabet: false,
    sortByRaiting: false,
  },
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "nannies/getNannies":
      return {
       ...state,
        nannies: action.payload,
      };
  
    default:
      return state;
  }
}


export const store = configureStore({
  reducer: rootReducer
});

