import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";

function Private() {
  return (
    <>
      <Navbar />
      <Outlet />
      You logged in!
    </>
  );
}

export default Private;