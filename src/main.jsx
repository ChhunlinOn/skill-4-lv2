import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Farmers from "./pages/Croptypepage";
import "./index.css";
import App from "./App";
import CropPages from "./pages/Croppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      {
        path: "/croppages",
        element: <CropPages />,
      },
      {
        path: "/croptypes",
        element: <Farmers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
