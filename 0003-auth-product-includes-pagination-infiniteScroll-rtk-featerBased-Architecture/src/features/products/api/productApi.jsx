import { axiosInstance } from "../../../config/axiosInstance";

export const getAllProductApi = async () => {
  try {
    // console.log("Runing get All Product ");
    const response = await axiosInstance.get("/products");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
