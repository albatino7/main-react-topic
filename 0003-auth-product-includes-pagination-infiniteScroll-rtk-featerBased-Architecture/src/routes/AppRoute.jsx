import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicRoute from "../layout/PublicRoute";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import MainRoute from "../layout/MainRoute";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/productPage";
import AboutPage from "../shared/ui/pages/AboutPage";
import { useDispatch } from "react-redux";
import { hydartionApi } from "../features/auth/state/useAction";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
const AppRoute = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    (() => {
      dispacth(hydartionApi());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: "",
          element: <PublicRoute />,
          children: [
            {
              path: "",
              element: <RegisterPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
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
          element: <MainRoute />,
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
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
