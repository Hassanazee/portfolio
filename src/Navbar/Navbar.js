import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navBar">
      <nav>
        <h3>DevelopmentFirst</h3>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
