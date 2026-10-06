import React from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { usegetCategoryList } from "../../hook/useProductHook";

const Filter = ({
  catgoryData,
  setCategoryData,
  searchData,
  setSearchData,
}) => {
  const { data, isPending, error } = usegetCategoryList();
  //   console.log("categoryData ", data);
  console.log(catgoryData);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
          <SlidersHorizontal size={19} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Find Products
          </h2>

          <p className="text-xs text-slate-500 sm:text-sm">
            Search or browse products by category
          </p>
        </div>
      </div>

      {/* Filter Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-end">
          {/* ================= SEARCH ================= */}
          <div className="w-full md:flex-1">
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search Product
            </label>

            <div className="relative">
              {/* Search Icon */}
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                onChange={(e) => {
                  setSearchData(e.target.value);
                  setCategoryData("");
                }}
                value={searchData}
                id="search"
                type="text"
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />

              {/* Clear Button */}
              <button
                type="button"
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ================= CATEGORY ================= */}
          <div className="w-full md:w-72">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>

            <div className="relative">
              {/* Custom Icon */}
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                onChange={(e) => {
                  setCategoryData(e.target.value);
                  setSearchData("");
                }}
                value={catgoryData}
                id="category"
                defaultValue="all"
                className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="">All categories</option>
                {data?.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
