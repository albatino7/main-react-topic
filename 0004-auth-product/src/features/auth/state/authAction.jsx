import { createAsyncThunk } from "@reduxjs/toolkit";
import { axisoInstance } from "../../../config/axisoInstance";
export const getLoginApi = createAsyncThunk(
  "auth/me",
  async (credential, thunkApi) => {
    try {
      const response = await axisoInstance.post("/auth/login", credential);
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue("unable to login ");
    }
  },
);

export const hydration = createAsyncThunk("auht/me", async (_, thunkApi) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axisoInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue("unable to login with AcessToken");
  }
});
