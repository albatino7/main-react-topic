import React from "react";
import ProductCard from "../../../features/products/ui/components/ProductCard";
import useinfiniteScrollHook from "../../hook/useinfiniteScrollHook";
import WindowsXPLoader from "../../ui/components/WindowsXPLoader";

const HomePage = () => {
  const {
    data,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useinfiniteScrollHook();

  // Combine products from all pages
  const allProducts = data?.pages?.flatMap((page) => page.products) || [];

  // Initial loading
  if (isPending) {
    return <WindowsXPLoader />;
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-center">
          <h2 className="text-lg font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="mt-1 text-sm text-red-500">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Discover Products
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Explore our latest products
        </p>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4 lg:px-8">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center px-4 py-10">
        {hasNextPage ? (
          <button
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        ) : (
          <p className="text-sm font-medium text-slate-500">
            You have reached the end.
          </p>
        )}
      </div>
    </main>
  );
};

export default HomePage;
