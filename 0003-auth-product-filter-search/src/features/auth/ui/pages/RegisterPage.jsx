import React from "react";
import {
  LockKeyhole,
  User,
  Mail,
  UserRound,
  Sparkles,
  ArrowRight,
  LogIn,
} from "lucide-react";
import useAuthHook from "../../hooks/useAuthHook";

const RegisterPage = () => {
  const { navigate, register, errors, handleRegister, handleSubmit } =
    useAuthHook();
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 py-8">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-[spin_15s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[12%] left-[15%] h-2 w-2 rounded-full bg-blue-400 animate-bounce" />
      <div className="absolute top-[20%] right-[18%] h-3 w-3 rounded-full bg-purple-400 animate-ping" />
      <div className="absolute bottom-[18%] left-[12%] h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      <div className="absolute bottom-[12%] right-[20%] h-2 w-2 rounded-full bg-blue-400 animate-bounce" />

      {/* Main Card */}
      <div
        className="
          relative z-10 w-full max-w-5xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.06]
          backdrop-blur-2xl
          shadow-2xl shadow-blue-950/40
          flex flex-col md:flex-row
          animate-[fadeIn_0.8s_ease-out]
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            relative hidden md:flex
            md:w-[42%]
            flex-col justify-between
            overflow-hidden
            bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20
            p-10
          "
        >
          {/* Decorative Circle */}
          <div
            className="
              absolute -top-20 -right-20
              h-56 w-56
              rounded-full
              border border-white/10
              animate-[spin_15s_linear_infinite]
            "
          />

          <div
            className="
              absolute -bottom-32 -left-32
              h-72 w-72
              rounded-full
              border border-white/10
              animate-[spin_20s_linear_infinite_reverse]
            "
          />

          {/* Logo */}
          <div className="relative">
            <div
              className="
                mb-6 flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-gradient-to-br from-blue-500 to-purple-600
                shadow-lg shadow-blue-500/30
                animate-[float_3s_ease-in-out_infinite]
              "
            >
              <Sparkles className="text-white" size={27} />
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white">
              Create your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                account.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Join us today and start your journey with a simple and beautiful
              experience.
            </p>
          </div>

          {/* Login Box */}
          <div
            className="
              relative mt-10
              rounded-2xl
              border border-white/10
              bg-black/20
              p-5
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-400/30
              hover:shadow-xl hover:shadow-blue-900/20
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <LogIn size={21} />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Already have an account?
                </p>

                <p className="text-xs text-slate-500">Login to continue</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/login")}
              type="button"
              className="
                group mt-4 flex w-full
                items-center justify-center gap-2
                rounded-xl
                border border-blue-500/30
                bg-blue-500/10
                py-3
                text-sm font-semibold
                text-blue-400
                transition-all duration-300
                hover:bg-blue-500
                hover:text-white
                hover:shadow-lg hover:shadow-blue-500/20
              "
            >
              Go to Login
              <ArrowRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full md:w-[58%] p-7 sm:p-10">
          {/* Heading */}
          <div className="mb-8 text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
              <Sparkles size={18} className="text-blue-400 animate-pulse" />

              <span className="text-sm font-medium text-blue-400">
                GET STARTED
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details to create your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* Name */}
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>

              <div
                className="
                  relative flex items-center
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  transition-all duration-300
                  focus-within:-translate-y-1
                  focus-within:border-blue-500
                  focus-within:ring-4
                  focus-within:ring-blue-500/10
                "
              >
                <UserRound
                  size={19}
                  className="
                    absolute left-4
                    text-slate-500
                    transition-colors duration-300
                    group-focus-within:text-blue-400
                  "
                />

                <input
                  {...register("name", {
                    required: "please enter Your Name",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full rounded-xl
                    bg-transparent
                    py-3.5 pl-12 pr-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                  "
                />
              </div>
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Username */}
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Username
              </label>

              <div
                className="
                  relative flex items-center
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  transition-all duration-300
                  focus-within:-translate-y-1
                  focus-within:border-indigo-500
                  focus-within:ring-4
                  focus-within:ring-indigo-500/10
                "
              >
                <User
                  size={19}
                  className="
                    absolute left-4
                    text-slate-500
                    transition-colors duration-300
                    group-focus-within:text-indigo-400
                  "
                />

                <input
                  {...register("username", {
                    required: "username is Required",
                  })}
                  type="text"
                  placeholder="Choose a username"
                  className="
                    w-full rounded-xl
                    bg-transparent
                    py-3.5 pl-12 pr-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                  "
                />
              </div>
              {errors.username && <p>{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <div
                className="
                  relative flex items-center
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  transition-all duration-300
                  focus-within:-translate-y-1
                  focus-within:border-cyan-500
                  focus-within:ring-4
                  focus-within:ring-cyan-500/10
                "
              >
                <Mail
                  size={19}
                  className="
                    absolute left-4
                    text-slate-500
                    transition-colors duration-300
                    group-focus-within:text-cyan-400
                  "
                />

                <input
                  {...register("email", {
                    required: "email is Required",
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full rounded-xl
                    bg-transparent
                    py-3.5 pl-12 pr-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                  "
                />
              </div>
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div
                className="
                  relative flex items-center
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  transition-all duration-300
                  focus-within:-translate-y-1
                  focus-within:border-purple-500
                  focus-within:ring-4
                  focus-within:ring-purple-500/10
                "
              >
                <LockKeyhole
                  size={19}
                  className="
                    absolute left-4
                    text-slate-500
                    transition-colors duration-300
                    group-focus-within:text-purple-400
                  "
                />

                <input
                  {...register("password", {
                    required: "password is Required",
                  })}
                  type="password"
                  placeholder="Create a password"
                  className="
                    w-full rounded-xl
                    bg-transparent
                    py-3.5 pl-12 pr-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                  "
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="
                group relative
                w-full overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-[1.01]
                hover:shadow-xl
                hover:shadow-purple-600/30
                active:scale-95
              "
            >
              {/* Shine */}
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  group-hover:translate-x-full
                  transition-transform duration-700
                "
              />

              <span className="relative flex items-center justify-center gap-2">
                Create Account
                <ArrowRight
                  size={19}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </button>
          </form>

          {/* Mobile Login */}
          <div className="mt-7 text-center md:hidden">
            <p className="text-sm text-slate-500">Already have an account?</p>

            <button
              type="button"
              className="
                mt-2
                text-sm font-semibold
                text-blue-400
                transition-colors
                hover:text-blue-300
              "
            >
              Go to Login →
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(35px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default RegisterPage;
