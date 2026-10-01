import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllproducts } from "./api/getAllProducts";
import ProudctCard from "./components/ProudctCard";
const App = () => {
  const limit = 40;
  const [page, setPage] = useState(1);
  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["pagination", page],
    queryFn: () => getAllproducts(limit, page),
    placeholderData: keepPreviousData,
    staleTime: 100 * 60 * 5,
  });

  if (isPending) return "loading .......";
  if (error) return "something went rong ....";
  // console.log(data);

  const totalPage = Math.ceil(data?.total / limit);
  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Product Grid */}
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.products?.map((val) => {
              return <ProudctCard key={val.id} product={val} />;
            })}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {/* Previous */}
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Prev
            </button>

            {/* Page */}
            <div className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md">
              {page} / {totalPage}
            </div>

            {/* Next */}
            <button
              disabled={page === totalPage}
              onClick={() => setPage(page + 1)}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
