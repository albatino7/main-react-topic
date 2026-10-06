import React, { useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import PublicProtected from "./protected/publicProtected.jsx";
import MainProtected from "./protected/MainProtected";
import { useDispatch } from "react-redux";
import { hydration } from "../features/auth/state/authAction.jsx";
const AppRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(hydration());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <PublicProtected />,
      children: [
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
      ],
    },

    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
