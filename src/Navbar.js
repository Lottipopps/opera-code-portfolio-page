import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoDay from "./images/Opera-Code-Logo-Day.png";

export default function Navbar() {
  return (
    <nav className="Navbar sticky-top">
      <ul className="d-flex justify-content-between">
        <li>
          <Link to="/">
            <img src={LogoDay} alt="Logo" id="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <i className="fa-solid fa-sun" style={{ color: "#34495e" }}></i>
          {"   "}
          <i className="fa-solid fa-moon" style={{ color: "#34495e" }}></i>
        </li>
      </ul>
    </nav>
  );
}
