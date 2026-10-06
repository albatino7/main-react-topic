import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import WindowsXPLoader from "../../shared/ui/components/WindowsXPLoader";

const MainProtected = () => {
  const { isLoading, user } = useSelector((store) => store.auth);
  console.log(user);

  if (isLoading) {
    return <WindowsXPLoader />;
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }
  //   toast.success("login sucessFull");
  return <Outlet />;
};

export default MainProtected;
