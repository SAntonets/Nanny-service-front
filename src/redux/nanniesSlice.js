import { createSlice } from "@reduxjs/toolkit";

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: {
    nannies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.nannies = action.payload;
     },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
     },
  }
  })

export const { fetchingInProgress, fetchingSuccess, fetchingError } = nanniesSlice.actions;