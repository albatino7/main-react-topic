import React from "react";
import { Outlet } from "react-router";
import PublicNavbar from "../shared/ui/components/PublicNavbar";

const PublicRoute = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {" "}
      {/* Navbar */} <PublicNavbar /> {/* Page Content */}{" "}
      <main className="pt-24">
        {" "}
        <Outlet />{" "}
      </main>{" "}
    </div>
  );
};

export default PublicRoute;
