import React from "react";
import "./navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="navbar">
        <h2 className="logo">SMART WORLD</h2>

        <div className="nav-right">
          <div className="search-box">
            <IoIosSearch className="search-icon" />
            <input
              type="text"
              placeholder="Enter Brand Name..."
            />
          </div>

          <Link to="/signin" className="signin">
            <FaRegUserCircle size={22} />
            <span>Sign in</span>
          </Link>
        </div>
      </header>

      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}
export default NavBar;