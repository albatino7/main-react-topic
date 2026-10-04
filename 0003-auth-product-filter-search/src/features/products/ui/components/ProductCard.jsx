import React from "react";
import { Star, ShoppingCart, Heart, ArrowUpRight } from "lucide-react";

const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    brand,
    price,
    rating,
    discountPercentage,
    availabilityStatus,
  } = product;

  return (
    <div className="group w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {/* Discount */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          -{discountPercentage.toFixed(0)}%
        </span>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm transition-all duration-300 hover:scale-110 hover:text-red-500">
          <Heart size={17} />
        </button>

        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Floating arrow */}
        <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-12 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
          {brand}
        </p>

        {/* Title */}
        <h2 className="line-clamp-1 text-base font-bold text-gray-900">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            <span>{rating}</span>
            <Star size={12} fill="currentColor" />
          </div>

          <span className="text-xs text-gray-400">Customer Rating</span>
        </div>

        {/* Price + Stock */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xl font-extrabold text-gray-900">${price}</p>

            <p className="text-xs font-medium text-green-600">
              {availabilityStatus}
            </p>
          </div>

          {/* Cart Button */}
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
