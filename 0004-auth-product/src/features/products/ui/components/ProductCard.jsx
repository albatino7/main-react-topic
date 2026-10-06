import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl">
      {/* Product Image */}
      <div className="h-44 w-full overflow-hidden bg-slate-100 sm:h-52">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        {/* Category */}
        <p className="mb-1 truncate text-[11px] font-medium uppercase tracking-wide text-blue-600 sm:text-xs">
          {product?.category}
        </p>

        {/* Title */}
        <h2 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
          {product?.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star
            size={15}
            fill="currentColor"
            className="shrink-0 text-yellow-500 sm:h-4 sm:w-4"
          />

          <span className="text-xs font-medium text-slate-700 sm:text-sm">
            {product?.rating}
          </span>
        </div>

        {/* Price + Discount */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-slate-900 sm:text-xl">
            ${product?.price}
          </span>

          <span className="truncate text-[11px] font-medium text-green-600 sm:text-xs">
            {product?.discountPercentage}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
