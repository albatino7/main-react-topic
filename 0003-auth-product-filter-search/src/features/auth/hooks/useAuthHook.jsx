import React from "react";
import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginApi } from "../state/useAction";
import { toast } from "react-toastify";

const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  const handleLogin = (data) => {
    toast.success("Register Sucessfully");
    dispatch(LoginApi(data));
  };

  return {
    navigate,
    register,
    reset,
    handleSubmit,
    errors,
    handleLogin,
    handleRegister,
  };
};

export default useAuthHook;
