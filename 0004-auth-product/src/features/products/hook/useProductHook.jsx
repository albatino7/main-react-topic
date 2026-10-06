import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getProductByList } from "../api/productApi";
export const useProductHook = () => {
  const [searchData, setSearchData] = useState("");
  const [catgoryData, setCategoryData] = useState("");
  const [debounce, setDebounceData] = useState("");
  console.log("This is Debounce", debounce);

  const { data, isPending, error } = useQuery({
    queryKey: ["productscalling", debounce, catgoryData],
    queryFn: () => getAllProduct(debounce, catgoryData),
  });

  useEffect(() => {
    const clear = setTimeout(() => {
      setDebounceData(searchData);
    }, 1000);

    return () => {
      clearTimeout(clear);
    };
  }, [searchData]);

  return {
    data,
    isPending,
    error,
    searchData,
    setSearchData,
    catgoryData,
    setCategoryData,
  };
};

export const usegetCategoryList = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getProductByList,
  });

  return {
    data,
    isPending,
    error,
  };
};
