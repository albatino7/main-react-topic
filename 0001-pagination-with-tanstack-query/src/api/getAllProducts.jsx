import { axiosInstance } from "./axiosInastance";

export const getAllproducts = async (limit, page) => {
  try {
    const skip = (page - 1) * limit;
    console.log("getAll product api is Runnig ");
    const response = await axiosInstance.get(
      `/products?limit=${limit}&skip=${skip}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
