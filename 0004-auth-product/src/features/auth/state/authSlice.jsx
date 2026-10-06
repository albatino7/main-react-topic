import { createSlice } from "@reduxjs/toolkit";
import { getLoginApi, hydration } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
      state.isLoading = false;
    },

    removeUser: (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginApi.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(getLoginApi.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getLoginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(hydration.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(hydration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(hydration.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
