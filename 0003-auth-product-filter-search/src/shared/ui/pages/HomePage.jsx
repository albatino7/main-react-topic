import React from "react";
import {
  ArrowRight,
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import useHomeHook from "../../hooks/useHomeHook";
import ProudctCard from "../components/ProudctCard";

const HomePage = () => {
  const {
    allData,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
    isPending,
  } = useHomeHook();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
            {/* Hero Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                <Sparkles size={16} />
                New Collection Available
              </div>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Shop Smart.
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Live Better.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
                Discover amazing products, unbeatable prices, and everything you
                need in one place.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <button
                  type="button"
                  className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-600/40 active:scale-95"
                >
                  Shop Now
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 active:scale-95"
                >
                  Explore Products
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative flex h-72 w-72 shrink-0 items-center justify-center sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-2xl" />

              <div className="relative flex h-64 w-64 rotate-3 items-center justify-center rounded-[3rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 shadow-2xl shadow-blue-900/30 backdrop-blur-xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <ShoppingBag
                  size={110}
                  strokeWidth={1.2}
                  className="text-blue-400"
                />
              </div>

              <div className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
                <p className="text-xs text-slate-400">Products</p>
                <p className="text-lg font-bold text-white">1000+</p>
              </div>

              <div className="absolute -bottom-2 left-0 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
                <p className="text-xs text-slate-400">Happy Shopping</p>
                <p className="text-lg font-bold text-green-400">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-6 py-6 lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Fast Delivery</p>
              <p className="text-xs text-slate-500">Quick & reliable</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Secure Payment</p>
              <p className="text-xs text-slate-500">100% protected</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Headphones size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">24/7 Support</p>
              <p className="text-xs text-slate-500">We're here to help</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Best Quality</p>
              <p className="text-xs text-slate-500">Top products</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-400">
              <Sparkles size={16} />
              TRENDING NOW
            </div>

            <h2 className="text-3xl font-black sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore our latest products and best deals.
            </p>
          </div>

          <button
            type="button"
            className="group flex items-center gap-2 self-start rounded-lg text-sm font-semibold text-slate-300 transition-colors hover:text-blue-400 sm:self-auto"
          >
            View All
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Loading */}
        {isPending && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
              <p className="text-sm text-slate-500">Loading products...</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-4 font-semibold text-red-400">
              Unable to load products
            </p>
          </div>
        )}

        {/* Products */}
        {!isPending && !error && (
          <div className="flex flex-wrap justify-center gap-6">
            {allData?.map((val) => (
              <ProudctCard key={val.id} product={val} />
            ))}
          </div>
        )}

        {/* ================= LOAD MORE ================= */}
        <div className="mt-14 flex flex-col items-center">
          {hasNextPage ? (
            <button
              type="button"
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
              className="group flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:shadow-blue-600/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-slate-900"
            >
              {isFetchingNextPage ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-white" />
                  Loading...
                </>
              ) : (
                <>
                  Load More
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          ) : (
            <p className="text-sm font-medium text-slate-600">
              You've reached the end of the products.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
