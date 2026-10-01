import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/getAllproducts";
import ProudctCard from "./components/ProudctCard";
const App = () => {
  const limit = 8;

  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infinte"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastpage, allpage) => {
        const loadedData = allpage.length * limit;

        if (loadedData < lastpage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "Loading.... ";
  if (error) return "something went Wrong";

  console.log(data);

  const allData = data?.pages.flatMap((val) => val.products) ?? [];
  console.log(allData);

  return (
    <>
      <div className="min-h-screen bg-slate-950 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Products */}
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allData?.map((val) => {
              return <ProudctCard key={val.id} product={val} />;
            })}
          </div>

          {/* Load More */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => fetchNextPage()}
              className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-600/30 active:translate-y-0"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
