import React, { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAllCategoryList, getAllProductApi } from "../api/productApi";
import { useEffect } from "react";

export const useProductHook = () => {
  const [searchData, setSearchData] = useState("");
  const [debounce, setDebounce] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isPending, error } = useQuery({
    queryKey: ["getAllProduct", debounce, page],
    queryFn: () => getAllProductApi(searchData, limit, page),
    placeholderData: keepPreviousData,
    staleTime: 100 * 60 * 5,
  });

  const totalPage = Math.ceil(data?.total / limit);
  console.log(totalPage);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(searchData);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchData]);

  //   console.log(data?.products);
  return {
    data,
    isPending,
    error,
    searchData,
    setSearchData,
    page,
    setPage,
    totalPage,
  };
};

export const useCategoryHook = () => {
  const [categoryData, setCategoryData] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["category", categoryData],
    queryFn: () => getAllCategoryList(categoryData),
  });

  return {
    data,
    isLoading,
    error,
    categoryData,
    setCategoryData,
  };
};
