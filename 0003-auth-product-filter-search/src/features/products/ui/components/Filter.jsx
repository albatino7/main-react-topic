import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useCategoryHook } from "../../hooks/useProductHook";

const Filter = ({
  setSearchData,
  searchData,
  categoryData,
  setCategoryData,
}) => {
  const { data, isLoading, error } = useCategoryHook();
  // console.log(categoryData);

  return (
    <div className="mb-8 flex w-full flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <div className="relative w-full sm:max-w-md">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          onChange={(e) => {
            setSearchData(e.target.value);
            setCategoryData("");
          }}
          value={searchData}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      {/* Category */}
      <div className="relative w-full sm:w-56">
        <select
          value={categoryData}
          onChange={(e) => {
            setCategoryData(e.target.value);
            setSearchData("");
          }}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white"
        >
          <option value="">All Category</option>
          {data?.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};

export default Filter;
