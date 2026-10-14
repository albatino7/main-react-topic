import React from "react";
import { useForm } from "react-hook-form";
const useAuthHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  const handleRegister = (data) => {
    console.log(data);
  };

  return {
    handleSubmit,
    reset,
    errors,
  };
};

export default useAuthHook;
