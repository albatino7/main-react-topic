import React from "react";
import { ShoppingBag } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
          <ShoppingBag size={28} className="text-white" />
        </div>

        <h1 className="text-2xl font-bold text-slate-800">
          My<span className="text-blue-600">Shop</span>
        </h1>

        <p className="mt-1 text-sm text-slate-500">Loading products</p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
