import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProductApi } from "../api/productApi";
const useProductHook = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: getAllProductApi,
  });
  //   console.log(data?.products);
  return {
    data,
    isPending,
    error,
  };
};

export default useProductHook;
