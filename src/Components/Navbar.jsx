import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa"; // Home icon
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className="navbar">
        <div className="left">
          <Link to="/" onClick={closeMenu}>
            <FaHome size={22} style={{ fontWeight: "bold", color: " #1c799e"}} /> {/* Home Icon */}
          </Link>
        </div>
        <div className="navlogo">
          <h2>
            <Link to="/">
              <h1>Transli<span>Fy</span></h1>
            </Link>
          </h2>
        </div>

        {/* Mobile Links */}
        <div className={`navlinks ${isOpen ? "show" : ""}`}>
          {/* Close button inside menu */}
          <div className="close-btn" onClick={closeMenu}>
            &times;
          </div>
          
          <Link to="/" onClick={closeMenu}>Services</Link>
          <Link to="/" onClick={closeMenu}>Contact Us</Link>
        </div>

        {/* Mobile Toggle (Hamburger) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </>
  );
}
