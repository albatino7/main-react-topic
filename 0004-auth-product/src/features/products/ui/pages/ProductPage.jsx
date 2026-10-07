import React from "react";
import { useProductHook } from "../../hook/useProductHook";
import WindowsXPLoader from "../../../../shared/ui/components/WindowsXPLoader";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductPage = () => {
  const {
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
  } = useProductHook();

  if (isPending) {
    return <WindowsXPLoader />;
  }
  console.log(data);
  return (
    <>
      <div>
        <h1>products</h1>
      </div>
      <div>
        <Filter
          catgoryData={catgoryData}
          setCategoryData={setCategoryData}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-7xl items-center justify-center px-4 pb-8">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          {/* Previous Button */}
          <button
            type="button"
            disabled={pageData === 1}
            onClick={() => setPageData(pageData - 1)}
            className="group flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 sm:px-4"
          >
            <ChevronLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />

            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Indicator */}
          <div className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-sm">
            <span>{pageData}</span>

            <span className="text-blue-200">/</span>

            <span className="text-blue-100">{totalPage}</span>
          </div>

          {/* Next Button */}
          <button
            type="button"
            disabled={pageData === totalPage}
            onClick={() => setPageData(pageData + 1)}
            className="group flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 sm:px-4"
          >
            <span className="hidden sm:inline">Next</span>

            <ChevronRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
