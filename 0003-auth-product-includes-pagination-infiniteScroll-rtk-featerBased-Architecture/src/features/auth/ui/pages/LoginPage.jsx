import React from "react";
import { LockKeyhole, User, Sparkles, ArrowRight } from "lucide-react";
import useAuthHook from "../../hooks/useAuthHook";

const LoginPage = () => {
  const { register, errors, handleSubmit, handleLogin } = useAuthHook();
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4">
      {/* Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />

      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-[spin_12s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[15%] left-[20%] h-2 w-2 rounded-full bg-blue-400 animate-bounce" />
      <div className="absolute top-[25%] right-[20%] h-3 w-3 rounded-full bg-purple-400 animate-ping" />
      <div className="absolute bottom-[20%] left-[15%] h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      <div className="absolute bottom-[15%] right-[25%] h-2 w-2 rounded-full bg-blue-400 animate-bounce" />

      {/* Login Card */}
      <div
        className="
          relative z-10 w-full max-w-md
          rounded-3xl border border-white/10
          bg-white/[0.06] backdrop-blur-2xl
          shadow-2xl shadow-blue-950/40
          p-8 sm:p-10
          animate-[fadeIn_0.8s_ease-out]
          hover:border-blue-400/30
          hover:shadow-blue-900/30
          transition-all duration-500
        "
      >
        {/* Top Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="
              group flex h-16 w-16 items-center justify-center
              rounded-2xl
              bg-gradient-to-br from-blue-500 to-purple-600
              shadow-lg shadow-blue-500/30
              animate-[float_3s_ease-in-out_infinite]
              hover:rotate-12 hover:scale-110
              transition-all duration-300
            "
          >
            <LockKeyhole
              size={30}
              className="text-white group-hover:rotate-[-12deg] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-blue-400 animate-pulse" size={18} />

            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

            <Sparkles className="text-purple-400 animate-pulse" size={18} />
          </div>

          <p className="text-slate-400 text-sm">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
          {/* Username */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Username
            </label>

            <div
              className="
                relative flex items-center
                rounded-xl border border-white/10
                bg-black/20
                transition-all duration-300
                focus-within:border-blue-500
                focus-within:ring-4
                focus-within:ring-blue-500/10
                focus-within:-translate-y-1
              "
            >
              <User
                size={20}
                className="
                  absolute left-4 text-slate-500
                  group-focus-within:text-blue-400
                  transition-colors duration-300
                "
              />

              <input
                {...register("username", {
                  required: "username is Required ",
                })}
                type="text"
                placeholder="Enter your username"
                className="
                  w-full rounded-xl bg-transparent
                  py-4 pl-12 pr-4
                  text-white placeholder:text-slate-600
                  outline-none
                "
              />
            </div>
            {errors.username && <p> {errors.username.message}</p>}
          </div>

          {/* Password */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div
              className="
                relative flex items-center
                rounded-xl border border-white/10
                bg-black/20
                transition-all duration-300
                focus-within:border-purple-500
                focus-within:ring-4
                focus-within:ring-purple-500/10
                focus-within:-translate-y-1
              "
            >
              <LockKeyhole
                size={20}
                className="
                  absolute left-4 text-slate-500
                  group-focus-within:text-purple-400
                  transition-colors duration-300
                "
              />

              <input
                {...register("password", {
                  required: "password is Requried",
                })}
                type="password"
                placeholder="Enter your password"
                className="
                  w-full rounded-xl bg-transparent
                  py-4 pl-12 pr-4
                  text-white placeholder:text-slate-600
                  outline-none
                "
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              group relative w-full overflow-hidden
              rounded-xl
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              py-4 font-semibold text-white
              shadow-lg shadow-blue-600/20
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:shadow-xl hover:shadow-purple-600/30
              active:scale-95
            "
          >
            {/* Shine Animation */}
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent via-white/20 to-transparent
                group-hover:translate-x-full
                transition-transform duration-700
              "
            />

            <span className="relative flex items-center justify-center gap-2">
              Login
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

        {/* Bottom Text */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Welcome back. Your journey continues here.
        </p>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
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

export default LoginPage;
