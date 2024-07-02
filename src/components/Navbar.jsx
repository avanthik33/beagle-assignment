import React, { useState } from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container navbarContainer">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <nav className="navbar">
            <div className="navbar-brand">
              <span className="brand-logo">P</span>
              <span className="brand-logo-alt">L</span>
              <span className="brand-logo-alt">A</span>
              <span className="brand-logo-alt">Y</span>
              <span className="brand-logo-alt">G</span>
              <span className="brand-logo-alt">R</span>
              <span className="brand-logo-alt">O</span>
              <span className="brand-logo-alt">U</span>
              <span className="brand-logo-alt">N</span>
              <span className="brand-logo-alt">D</span>
            </div>
            <div className={`navbar-links ${isOpen ? "active" : ""}`}>
              <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={`navbar-icons ${isOpen ? "active" : ""}`}>
              <a href="#login" className="icon">
                <i className="fas fa-user-circle"></i> Log In
              </a>
              <a href="#cart" className="icon">
                <i className="fas fa-shopping-cart"></i> <span>0</span>
              </a>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
