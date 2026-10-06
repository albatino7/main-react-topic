import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import { removeUser } from "../../features/auth/state/authSlice";
const useLogoutHook = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    toast.success("logoutSucessfull");
    return <Navigate to={"/"} />;
  };

  return {
    handleLogout,
  };
};

export default useLogoutHook;
