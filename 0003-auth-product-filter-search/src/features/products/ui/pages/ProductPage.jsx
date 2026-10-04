import React from "react";
import { useProductHook, useCategoryHook } from "../../hooks/useProductHook";

import ProductCard from "../components/ProductCard";
import Loading from "../../../../shared/ui/components/Loading";
import Filter from "../components/Filter";

const ProductPage = () => {
  const {
    data,
    isPending,
    error,
    searchData,
    setSearchData,
    SearchData,
    page,
    setPage,
    totalPage,
  } = useProductHook();

  const {
    data: CategoryData,
    setCategoryData,
    categoryData,
  } = useCategoryHook();

  // --------------------------------
  // Decide which products to show
  // --------------------------------

  let products = data?.products || [];

  // Category products
  if (categoryData && CategoryData?.products) {
    products = CategoryData.products;
  }

  // Search products
  // Search gets highest priority
  if (searchData && SearchData?.products) {
    products = SearchData.products;
  }

  return (
    <div className="min-h-screen w-full bg-slate-100 px-6 py-8">
      {/* Heading */}
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
        Products -- Search -- Category -- Pagination
      </h1>

      {/* Filter */}
      <Filter
        categoryData={categoryData}
        setCategoryData={setCategoryData}
        searchData={searchData}
        setSearchData={setSearchData}
      />

      {/* Products Section */}
      <div className="min-h-[400px]">
        {isPending ? (
          <Loading />
        ) : error ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="font-semibold text-red-500">
              Unable to load products
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-lg font-semibold text-gray-500">
              No products found
            </p>
          </div>
        ) : (
          <div className="flex w-full flex-wrap justify-center gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-4">
        {/* Previous */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Prev
        </button>

        {/* Current Page */}
        <div className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-110">
          {page} of {totalPage}
        </div>

        {/* Next */}
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:translate-x-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0"
        >
          Next
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
