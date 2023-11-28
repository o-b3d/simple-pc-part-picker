import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users, loader as usersLoader } from "./pages/Users.jsx";
import { About } from "./pages/about.jsx";
import Navbar from "./navbar.jsx";
import CPU from "./pages/cpu.jsx";


const router = createBrowserRouter([
  {
    path: "/*",
    element:
      ({
        /*I used a parent tag, or <> to add the Navbar to all routes -OG*/
      },
      (
        <>
          <Navbar />
          <App />
        </>
      )),
  },
  {
    path: "/cpu",
    element: (
      <>
        <Navbar />
        <CPU />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "Users",
    element: <Users />,
    loader: usersLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);