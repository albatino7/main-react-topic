import React from "react";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import { getProductForHome } from "../api/getProductForHome";
const useHomeHook = () => {
  const limit = 4;
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infiniteScroll"],
    queryFn: ({ pageParam }) => getProductForHome(limit, pageParam),

    initialPageParam: 0,
    getNextPageParam: (lastpage, allPage) => {
      const allData = allPage.length * limit;

      if (allData < lastpage?.total) return allData;
      return undefined;
    },
    placeholderData: keepPreviousData,
  });

  const allData = data?.pages.flatMap((val) => val?.products) ?? [];
  console.log(allData);

  return {
    allData,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    error,
    hasNextPage,
  };
};

export default useHomeHook;
