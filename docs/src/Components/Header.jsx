import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* ---------- LEFT: LOGO ---------- */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/EsmartPayLogo.png" alt="EsmartPay Logo" className="logo-img" />
      </div>

      {/* ---------- NAV LINKS ---------- */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/AboutUS" onClick={closeMenu}>About Us</Link>
        <Link to="/UnderConstruction" onClick={closeMenu}>Services</Link>
        <Link to="/UnderConstruction" onClick={closeMenu}>Products</Link>
        <Link to="/UnderConstruction" onClick={closeMenu}>Career</Link>
        <Link to="/UnderConstruction" onClick={closeMenu}>Contact Us</Link>
        <Link to="/UnderConstruction" onClick={closeMenu}>Team</Link>

        {/* ---------- MOBILE LOGIN BUTTON ---------- */}
        <button
          className="login-btn mobile-login"
          onClick={() => {
            navigate("/login");
            closeMenu();
          }}
        >
          Login
        </button>
      </nav>

      {/* ---------- RIGHT SIDE: LOGIN + MENU ICON ---------- */}
      <div className="right-icons">
        <button
          className="login-btn desktop-login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        {/* ---------- 3-Dot (Hamburger) Menu ---------- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
