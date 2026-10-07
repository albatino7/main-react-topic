import axios from "axios";
import { axisoInstance } from "../../config/axisoInstance";

export const getAllProduct = async (limit, pageParam) => {
  try {
    // const skip = (pageParam - 1) * limit;

    const response = await axisoInstance.get(
      `/products?limit=${limit}&skip=${pageParam}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
