import React from "react";
import { Link, useNavigate } from "react-router";
import { Home, ShoppingBag, Info, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";
import useNavbarHook from "../../hooks/useNavbarHook";
const MainNavbar = () => {
  const { handleLogout } = useNavbarHook();
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/main"
          className="text-xl font-bold text-slate-900 transition hover:text-blue-600"
        >
          My<span className="text-blue-600">Shop</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Home */}
          <Link
            to="/main"
            className="
              flex items-center gap-2
              rounded-lg px-3 py-2
              text-sm font-medium text-slate-600
              transition-all duration-200
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Home size={18} />
            <span className="hidden sm:block">Home</span>
          </Link>

          {/* Products */}
          <Link
            to="/main/product"
            className="
              flex items-center gap-2
              rounded-lg px-3 py-2
              text-sm font-medium text-slate-600
              transition-all duration-200
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:block">Products</span>
          </Link>

          {/* About */}
          <Link
            to="/main/about"
            className="
              flex items-center gap-2
              rounded-lg px-3 py-2
              text-sm font-medium text-slate-600
              transition-all duration-200
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Info size={18} />
            <span className="hidden sm:block">About</span>
          </Link>

          {/* Logout */}
          <button
            onClick={() => handleLogout()}
            type="button"
            className="
              ml-1 flex items-center gap-2
              rounded-lg
              bg-red-50
              px-3 py-2
              text-sm font-medium text-red-500
              transition-all duration-200
              hover:bg-red-500
              hover:text-white
            "
          >
            <LogOut size={18} />
            <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
