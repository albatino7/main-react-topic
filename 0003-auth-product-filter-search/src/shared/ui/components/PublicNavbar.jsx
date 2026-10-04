import React from "react";
import { Sparkles, LogIn, UserPlus, ArrowRight } from "lucide-react";

const PublicNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
      <div
        className="
          mx-auto max-w-7xl
          rounded-2xl
          border border-white/10
          bg-slate-950/70
          backdrop-blur-xl
          shadow-2xl shadow-black/20
          transition-all duration-500
          hover:border-blue-500/20
        "
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-7">
          {/* ================= LOGO ================= */}
          <div className="group flex cursor-pointer items-center gap-3">
            {/* Logo Icon */}
            <div
              className="
                relative flex h-10 w-10
                items-center justify-center
                overflow-hidden
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                shadow-lg
                shadow-blue-500/20
                transition-all duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              {/* Shine */}
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  group-hover:translate-x-full
                  transition-transform duration-700
                "
              />

              <Sparkles
                size={21}
                className="
                  relative z-10
                  text-white
                  transition-transform duration-500
                  group-hover:rotate-180
                "
              />
            </div>

            {/* Logo Name */}
            <div className="leading-none">
              <h1 className="text-xl font-bold tracking-tight text-white">
                My<span className="text-blue-400">Shop</span>
              </h1>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-slate-500">
                Simple • Fast • Secure
              </p>
            </div>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-2 sm:flex">
            {/* Register */}
            <button
              type="button"
              className="
                group relative
                flex items-center gap-2
                overflow-hidden
                rounded-xl
                px-4 py-2.5
                text-sm font-medium
                text-slate-300
                transition-all duration-300
                hover:bg-white/5
                hover:text-white
              "
            >
              <UserPlus
                size={17}
                className="
                  text-slate-500
                  transition-all duration-300
                  group-hover:-translate-y-0.5
                  group-hover:text-blue-400
                "
              />
              Register
              {/* Bottom Line */}
              <span
                className="
                  absolute bottom-0 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full
                  bg-blue-500
                  transition-all duration-300
                  group-hover:w-1/2
                "
              />
            </button>

            {/* Login */}
            <button
              type="button"
              className="
                group flex items-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-0.5
                hover:scale-[1.03]
                hover:shadow-xl
                hover:shadow-blue-600/30
                active:scale-95
              "
            >
              <LogIn
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
              Login
              <ArrowRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            className="
              group flex items-center gap-2
              rounded-xl
              border border-white/10
              bg-white/5
              px-3 py-2
              text-sm font-medium
              text-slate-300
              transition-all duration-300
              hover:border-blue-500/30
              hover:bg-blue-500/10
              hover:text-white
              sm:hidden
            "
          >
            <LogIn
              size={17}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
