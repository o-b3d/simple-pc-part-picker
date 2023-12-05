import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";

export default function Private() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}