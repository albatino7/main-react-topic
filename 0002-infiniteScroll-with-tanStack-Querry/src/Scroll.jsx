import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/getAllproducts";
import ProudctCard from "./components/ProudctCard";

const Scroll = () => {
  const limit = 8;

  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infinte"],

    queryFn: ({ pageParam }) => {
      return getAllProducts(limit, pageParam);
    },

    // First API call:
    // skip = 0
    initialPageParam: 0,

    getNextPageParam: (lastpage, allpage) => {
      const loadedData = allpage.length * limit;

      if (loadedData < lastpage.total) {
        return loadedData;
      }

      return undefined;
    },
  });

  // --------------------------------
  // 1. Create a ref
  // --------------------------------

  const loadMoreRef = useRef(null);

  // --------------------------------
  // 2. Create IntersectionObserver
  // --------------------------------

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Is bottom element visible?
      const isVisible = entries[0].isIntersecting;

      if (isVisible && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    // --------------------------------
    // 3. Tell observer what to watch
    // --------------------------------

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    // --------------------------------
    // 4. Cleanup
    // --------------------------------

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "Something went wrong";
  }

  const allData = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Products */}
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allData.map((product) => (
            <ProudctCard key={product.id} product={product} />
          ))}
        </div>

        {/* -------------------------------- */}
        {/* 5. Scroll Trigger */}
        {/* -------------------------------- */}

        <div
          ref={loadMoreRef}
          className="mt-10 flex min-h-24 items-center justify-center"
        >
          {isFetchingNextPage && (
            <p className="text-slate-400">Loading more products...</p>
          )}

          {!hasNextPage && <p className="text-slate-500">No more products</p>}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
