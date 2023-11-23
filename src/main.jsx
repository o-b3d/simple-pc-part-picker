import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Users, loader, loader as usersLoader } from "./pages/Users.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: "<App />"
  },
  {
    path : "Users",
    element: <Users />,
    loader: usersLoader
  },
  {
    path: "user/:email",
    element: <Users />,
    loader: loader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)