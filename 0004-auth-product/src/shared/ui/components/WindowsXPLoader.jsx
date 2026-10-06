import React from "react";
import { Monitor, LoaderCircle } from "lucide-react";

const WindowsXPLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#003399]">
      <div className="flex w-full max-w-md flex-col items-center px-6">
        {/* Windows XP Logo */}
        <div className="mb-10 flex items-center gap-4">
          {/* Windows Icon */}
          <div className="grid rotate-[-8deg] grid-cols-2 gap-1">
            <div className="h-8 w-8 rounded-sm bg-red-500 shadow-md" />
            <div className="h-8 w-8 rounded-sm bg-green-500 shadow-md" />
            <div className="h-8 w-8 rounded-sm bg-blue-500 shadow-md" />
            <div className="h-8 w-8 rounded-sm bg-yellow-400 shadow-md" />
          </div>

          {/* Logo Text */}
          <div>
            <div className="text-2xl font-semibold italic tracking-tight text-white">
              Microsoft
            </div>

            <div className="-mt-1 text-3xl font-bold italic text-white">
              Windows
              <span className="ml-1 text-orange-400">XP</span>
            </div>
          </div>
        </div>

        {/* Monitor Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-lg">
          <Monitor size={34} strokeWidth={1.5} className="text-white" />
        </div>

        {/* Loading Message */}
        <div className="mb-4 flex items-center gap-2 text-sm text-white">
          <LoaderCircle size={16} className="animate-spin" />

          <span>Starting Windows...</span>
        </div>

        {/* XP Loading Bar */}
        <div className="relative h-6 w-72 overflow-hidden rounded-sm border-2 border-white/60 bg-black/40 shadow-inner">
          {/* Moving Blocks */}
          <div className="absolute inset-0 flex items-center gap-1 px-1">
            <span className="h-4 w-9 animate-[xp_1.5s_linear_infinite] rounded-sm bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]" />

            <span className="h-4 w-9 animate-[xp_1.5s_linear_infinite] rounded-sm bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]" />

            <span className="h-4 w-9 animate-[xp_1.5s_linear_infinite] rounded-sm bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]" />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-7 text-xs text-white/70">
          Please wait while your account is being loaded...
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes xp {
            0% {
              transform: translateX(-150px);
            }

            100% {
              transform: translateX(300px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WindowsXPLoader;
