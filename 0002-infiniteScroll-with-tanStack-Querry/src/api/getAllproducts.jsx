import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async (limit, pageParams) => {
  // const skip = (pageParams - 1) * limit;
  try {
    const reponse = await axiosInstance.get(
      `/products?limit=${limit}&skip=${pageParams}`,
    );
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};
