import { axiosInstance } from "../../../config/axiosInstance";

export const getAllProductApi = async (debounce, limit, page) => {
  try {
    // https://dummyjson.com/products?limit=40&skip=0
    const skip = (page - 1) * limit;
    const url = debounce
      ? `/products/search?q=${debounce}&limit=${limit}&skip=${skip}`
      : `/products?limit=${limit}&skip=${skip}`;
    // console.log("Runing get All Product ");
    const response = await axiosInstance.get(url);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategoryList = async (categories) => {
  try {
    const url = categories
      ? `/products/category/${categories}`
      : "/products/categories";
    const response = await axiosInstance.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
