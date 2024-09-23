import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'nannies',
  initialState: {
    nannies: [],
  },
  reducers: {
    getNanniesList: (state, action) => {
      return {
        ...state,
        nannies: [...state.nannies, action.payload]
      }
    },
  }
})

export const { getNanniesList } = slice.actions


export default slice.reducer;