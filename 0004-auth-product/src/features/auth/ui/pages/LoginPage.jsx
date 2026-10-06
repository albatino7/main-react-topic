import React from "react";
import { useAuthHook } from "../../hook/useAuthHook";

const LoginPage = () => {
  const { handleLoginForm, handleSubmit, register, errors, navigate } =
    useAuthHook();
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">Login to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit(handleLoginForm)} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Username
              </label>

              <input
                {...register("username", {
                  required: "username is required",
                })}
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Password
              </label>

              <input
                {...register("password", {
                  required: "password is required",
                })}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-medium text-blue-400 hover:text-blue-300 pointer"
            >
              {" "}
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
