import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router";
import { toast } from "react-toastify";
import WindowsXPLoader from "../../shared/ui/components/WindowsXPLoader";
const PublicProtected = () => {
  const { isLoading, user } = useSelector((store) => store.auth);

  if (isLoading) {
    return <WindowsXPLoader />;
  }

  if (user) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicProtected;
