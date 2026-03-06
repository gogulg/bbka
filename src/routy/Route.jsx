import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";

 const Routess = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
         {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
  },
]);

export default Routess;