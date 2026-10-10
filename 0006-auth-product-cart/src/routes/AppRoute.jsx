import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";

import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import PrivateLayout from "../layout/PrivateLayout";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/product/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
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
      element: <PrivateLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
