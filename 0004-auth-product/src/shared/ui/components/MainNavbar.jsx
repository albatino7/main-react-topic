import React from "react";
import { NavLink } from "react-router";
import useLogoutHook from "../../hook/useLogoutHook";

const MainNavbar = () => {
  const { handleLogout } = useLogoutHook();
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/main" className="text-2xl font-bold text-white">
          ShopKart
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Products
          </NavLink>

          <button
            onClick={() => handleLogout()}
            type="button"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
