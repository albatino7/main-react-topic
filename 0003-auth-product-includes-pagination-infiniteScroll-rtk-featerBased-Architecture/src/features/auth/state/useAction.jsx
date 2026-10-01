import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";

export const LoginApi = createAsyncThunk(
  "auth/me",
  async (credential, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/login", credential);
      localStorage.setItem("accessToken", response.data.accessToken);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to fetch Data ");
    }
  },
);

export const hydartionApi = createAsyncThunk(
  "auth/hydartion",
  async (_, thunApi) => {
    const token = localStorage.getItem("accessToken");
    console.log("token --->", token);
    try {
      const response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunApi.rejectWithValue("Unable to hydarte ");
    }
  },
);
