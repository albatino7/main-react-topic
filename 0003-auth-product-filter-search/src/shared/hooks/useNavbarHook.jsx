import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../../features/auth/state/authSlice";
import { toast } from "react-toastify";
const useNavbarHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUser());
    localStorage.removeItem("accessToken");
    toast.success("logout SuccessFull");
    navigate("/");
  };
  return {
    handleLogout,
  };
};

export default useNavbarHook;
