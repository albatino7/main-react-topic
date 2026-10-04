import { createSlice } from "@reduxjs/toolkit";
import { hydartionApi, LoginApi } from "./useAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.action = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    removeUser: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(LoginApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(LoginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(hydartionApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydartionApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(hydartionApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
