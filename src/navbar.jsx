import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
