import React from "react";
import { Sparkles } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />

      {/* Loading Content */}
      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div
          className="
            mb-5 flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-blue-500 to-purple-600
            shadow-xl shadow-blue-500/20
            animate-[float_2s_ease-in-out_infinite]
          "
        >
          <Sparkles size={28} className="text-white animate-pulse" />
        </div>

        {/* Name */}
        <h1
          className="
            text-3xl font-bold tracking-wide
            text-white
            animate-[fade_1.5s_ease-in-out_infinite]
          "
        >
          My<span className="text-blue-400">Shop</span>
        </h1>

        {/* Loading Text */}
        <p className="mt-2 text-sm text-slate-500">Loading your experience</p>

        {/* Dots */}
        <div className="mt-5 flex items-center gap-2">
          <span
            className="
              h-2.5 w-2.5 rounded-full
              bg-blue-400
              animate-bounce
            "
          />

          <span
            className="
              h-2.5 w-2.5 rounded-full
              bg-indigo-400
              animate-bounce
              [animation-delay:150ms]
            "
          />

          <span
            className="
              h-2.5 w-2.5 rounded-full
              bg-purple-400
              animate-bounce
              [animation-delay:300ms]
            "
          />

          <span
            className="
              h-2.5 w-2.5 rounded-full
              bg-pink-400
              animate-bounce
              [animation-delay:450ms]
            "
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes fade {
            0%, 100% {
              opacity: 0.5;
            }

            50% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
