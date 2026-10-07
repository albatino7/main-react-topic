import React from "react";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api/getallProductForHome";
const useinfiniteScrollHook = () => {
  const limit = 10;
  const { data, isPending, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["inifniteScroll"],
      queryFn: ({ pageParam }) => getAllProduct(limit, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allpage) => {
        const loadedData = allpage.length * limit;

        if (loadedData < lastPage?.total) {
          return loadedData;
        }
        return undefined;
      },
      placeholderData: keepPreviousData,
    });

  return {
    data,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
  };
};

export default useinfiniteScrollHook;
