import { axisoInstance } from "../../../config/axisoInstance";

export const getAllProduct = async (
  search,
  catgoryData,
  pageLimit,
  pageData,
) => {
  try {
    const skip = (pageData - 1) * pageLimit;

    let url = `/products?limit=${pageLimit}&skip=${skip}`;
    if (search) {
      url = `/products/search?q=${search}&limit=${pageLimit}&skip=${skip}`;
    } else if (catgoryData) {
      url = `/products/category/${catgoryData}?limit=${pageLimit}&skip=${skip}`;
    }

    const response = await axisoInstance.get(url);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByList = async () => {
  try {
    const reponse = await axisoInstance.get("/products/categories");
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};
