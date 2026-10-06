import React from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getLoginApi } from "../state/authAction";
export const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegiterForm = (data) => {
    console.log(data);
  };

  const handleLoginForm = (data) => {
    console.log(data);
    dispatch(getLoginApi(data));
    navigate("/main");
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    handleLoginForm,
    handleRegiterForm,
  };
};
