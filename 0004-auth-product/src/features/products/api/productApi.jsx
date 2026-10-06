import { axisoInstance } from "../../../config/axisoInstance";

export const getAllProduct = async (search, catgoryData) => {
  try {
    let url = "/products";
    if (search) {
      url = `/products/search?q=${search}`;
    } else if (catgoryData) {
      url = `/products/category/${catgoryData}`;
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
