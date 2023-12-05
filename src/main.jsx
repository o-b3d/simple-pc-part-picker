import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about.jsx";
import { partLoader, PartsPage } from "./pages/PartsPage.jsx";
import ContactUs from "./pages/contact.jsx";
import Home from "./pages/home.jsx";
import { AuthProvider } from "./utils/context/auth-context.jsx";
import RequireAuth from "./utils/require-auth.jsx";
import Private from "./private.jsx";

const withAuthProvider = (Component, requireAuth = false) => {
  return (
    <AuthProvider>
      {!requireAuth ? (
        <RequireAuth>
          <Component />
        </RequireAuth>
      ) : (
        <Component />
      )}
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "part/:part",
        element: <PartsPage />,
        loader: partLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  /* Need to figure out */
  {
    path: "/auth",
    element: withAuthProvider(Private, true)
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
