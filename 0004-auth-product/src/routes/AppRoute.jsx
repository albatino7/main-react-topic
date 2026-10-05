import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <PublicLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },

    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
