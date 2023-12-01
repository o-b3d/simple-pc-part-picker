import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users, loader as usersLoader } from "./pages/Users.jsx";
import { About } from "./pages/about.jsx";
import Navbar from "./navbar.jsx";
import CPU from "./pages/cpu.jsx";
import PSU from "./pages/psu.jsx";
import Ram from "./pages/ram.jsx";
import GPU from "./pages/gpu.jsx";
import ContactUs from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element:
      ({
        /*I used a parent tag, or <> to add the Navbar to each path. There's probably a better to do it though -OG*/
      },
      (
        <>
          <Navbar />
          <App />
        </>
      )),
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
    path: "/contact",
    element: (
      <>
        <Navbar />
        <ContactUs />
      </>
    ),
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
    path: "/ram",
    element: (
      <>
        <Navbar />
        <Ram />
      </>
    ),
  },
  {
    path: "/psu",
    element: (
      <>
        <Navbar />
        <PSU />
      </>
    ),
  },
  {
    path: "/gpu",
    element: (
      <>
        <Navbar />
        <GPU />
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
