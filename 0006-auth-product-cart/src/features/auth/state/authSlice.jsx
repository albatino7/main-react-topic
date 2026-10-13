import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthencticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthencticated = true;
      state.isLoading = false;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthencticated = false;
      state.isLoading = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
