import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'nannies',
  initialState: {
    nannies: [],
  },
  reducers: {
    getNanniesList: (state, action) => {
    },
  }
})

export const { getNanniesList } = slice.actions


export default slice.reducer;