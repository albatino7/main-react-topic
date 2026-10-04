import { axiosInstance } from "../../config/axiosInstance";

export const getProductForHome = async (limit, pageParam) => {
  // const skip = (pageParam - 1) * limit;
  try {
    const url = `/products?limit=${limit}&skip=${pageParam}`;
    const response = await axiosInstance.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
