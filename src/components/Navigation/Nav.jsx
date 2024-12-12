import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import logo from "../../assets/images/logo-sns.png";

export default function Nav() {
  const location = useLocation(); //getting the current route location

  const navColor = {
    // This changes the background colour of the navbar dependent on what location/page
    backgroundColor:
      location.pathname === "/"
        ? "transparent"
        : location.pathname === "/about"
        ? "#faf7f0"
        : location.pathname === "/ingredients"
        ? "transparent"
        : location.pathname === "/contact"
        ? "transparent"
        : location.pathname === "/faq"
        ? "transparent"
        : "#faf7f0",
  };

  const navTextColor = {
    // This changes the text colour of the navbar dependent on what location/page
    color:
      location.pathname === "/"
        ? "#faf7f0"
        : location.pathname === "/about"
        ? "#4A4947"
        : location.pathname === "/ingredients"
        ? "#faf7f0"
        : location.pathname === "/contact"
        ? "#faf7f0"
        : location.pathname === "/faq"
        ? "#4A4947"
        : "#faf7f0",
  };

  const mobileNavTextColor = {
    color: "#faf7f0",
  };

  const burgerColor = {
    backgroundColor: "#faf7f0",
  };

  useEffect(() => {
    // Hook for the burger menu used on small screens
    const menuBtn = document.querySelector(".hamburger"); //getting the hamburger element
    const mobileMenu = document.querySelector(".mobile-nav"); //getting the mobile navigation element

    // Function to toggle classes when these elements are clicked, adding or removing the 'active' class
    const toggleMenu = () => {
      menuBtn.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    };

    menuBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
      mobileMenu.removeEventListener("click", toggleMenu);
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div className="navigation">
      <nav style={navColor} className="navbar">
        <img src={logo} className="logo" alt="logo"></img>

        <ul className="navbar-ul">
          <li>
            <Link style={navTextColor} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={navTextColor} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={navTextColor} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link style={navTextColor} to="/ingredients">
              Ingredients
            </Link>
          </li>
          <li>
            <Link style={navTextColor} to="/faq">
              FAQs
            </Link>
          </li>
        </ul>

        <div className="search-bar">
          <input
            type="text"
            placeholder="search..."
            alt="Search bar"
            className="search-input"></input>
          <button className="search-submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="sm"
              style={{ color: "#4a4947" }}
            />
          </button>

          <img src="" alt=""></img>
        </div>
      </nav>

      <button className="hamburger" aria-expanded="false">
        <div className="bar" style={burgerColor}></div>
      </button>

      <nav className="mobile-nav">
        <ul className="mobile-ul">
          <li>
            <Link style={mobileNavTextColor} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={mobileNavTextColor} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={mobileNavTextColor} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link style={mobileNavTextColor} to="/ingredients">
              Ingredients
            </Link>
          </li>
          <li>
            <Link style={mobileNavTextColor} to="/faq">
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
