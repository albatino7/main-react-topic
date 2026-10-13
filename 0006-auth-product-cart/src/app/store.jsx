import { configureStore } from "@reduxjs/toolkit";
import authRedudcer from "../features/auth/state/authSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authRedudcer,
  },
});
