import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";
import bio from "../component/assest/biologo.jpeg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollClick = (elename) => {
    // Somewhere else, even another file
    scroller.scrollTo(elename, {
      duration: 1500,
      delay: 100,
      smooth: true,
      //containerId: "ContainerElementID",
      //offset: 50, // Scrolls to element + 50 pixels down the page
      // ... other options
    });
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={bio} width={75} /> </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <span
            to="/about"
            onClick={() => {
              setMenuOpen(false);
              scrollClick("aboutUsElement");
            }}
          >
            About
          </span>
        </li>
        <li>
          <span
            to="/service"
            onClick={() => {
              setMenuOpen(false);
              scrollClick("serviceElement");
            }}
          >
            Service
          </span>
        </li>
        <li>
          <span
            to="/contact"
            onClick={() => {
              setMenuOpen(false);
              scrollClick("contactusElement");
            }}
          >
            Contact
          </span>
        </li>
        {/*
        <li>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </li>
        */}
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
