// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { username } = action.payload;
      state.isAuthenticated = true;
      state.username = username;
      state.error = null;
    },
    loginFailure: (state, action) => {
      const { error } = action.payload;
      state.isAuthenticated = false;
      state.username = null;
      state.error = error;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;