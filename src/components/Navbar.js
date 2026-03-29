import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

// Icons
import { FaHome, FaInfoCircle, FaBox, FaPhone, FaUser } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-img" />
        <h2>Sree Coir</h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">
            <FaInfoCircle /> About
          </Link>
        </li>

        <li className={location.pathname === "/products" ? "active" : ""}>
          <Link to="/products">
            <FaBox /> Products
          </Link>
        </li>

        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">
            <FaPhone /> Contact
          </Link>
        </li>

        <li className={location.pathname === "/auth" ? "active" : ""}>
          <Link to="/auth">
            <FaUser /> Login
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;