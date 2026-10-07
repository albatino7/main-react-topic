import React, { useEffect, useState } from "react";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAllProduct, getProductByList } from "../api/productApi";
export const useProductHook = () => {
  let pageLimit = 10;
  const [searchData, setSearchData] = useState("");
  const [catgoryData, setCategoryData] = useState("");
  const [debounce, setDebounceData] = useState("");
  const [pageData, setPageData] = useState(1);
  console.log("This is Debounce", debounce);

  const { data, isPending, error } = useQuery({
    queryKey: ["productscalling", debounce, catgoryData, pageData],
    queryFn: () => getAllProduct(debounce, catgoryData, pageLimit, pageData),
    placeholderData: keepPreviousData,
  });

  const totalPage = Math.ceil(data?.total / pageLimit);

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
    pageData,
    setPageData,
    totalPage,
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
