import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about.jsx";
import { partLoader, PartsPage } from "./pages/PartsPage.jsx";
import ContactUs from "./pages/contact.jsx";
import Home from "./pages/home.jsx";

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
				loader: partLoader
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
