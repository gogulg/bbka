import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import  Routess  from "./routy/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <RouterProvider router={Routess} /> 


  </StrictMode>,
);
