import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AppRoute from "./routes/AppRoute.jsx";
const queryClient = new QueryClient();
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";

import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoute />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>,
);
