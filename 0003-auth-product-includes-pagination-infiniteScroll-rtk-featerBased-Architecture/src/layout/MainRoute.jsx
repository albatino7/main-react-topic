import React from "react";
import { Outlet } from "react-router";
import MainNavbar from "../shared/ui/components/MainNavbar";
const MainRoute = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default MainRoute;
