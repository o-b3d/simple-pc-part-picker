import { Link } from "react-router-dom";
import { SignOutUser } from "../utils/firebase";

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="link link-neutral" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="link link-neutral" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="link link-neutral" to="/Login">
              Log in
            </Link>
            <button onClick={SignOutUser}>Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
