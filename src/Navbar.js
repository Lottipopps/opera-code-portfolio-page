import React from "react";
import "./Navbar.css";
import LogoDay from "./images/Opera-Code-Logo-Day.png";

export default function Navbar() {
  return (
    <div className="Navbar sticky-top">
      <ul className="d-flex justify-content-between">
        <li>
          <a href="/">
            <img src={LogoDay} alt="Logo" id="logo" />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#Projects">Projects</a>
        </li>
        <li>
          <a href="/#CV">CV</a>
        </li>
        <li>
          <a href="/#Contacts">Contacts</a>
        </li>
        <li>
          <i className="fa-solid fa-sun" style={{ color: "#34495e" }}></i>
          {"   "}
          <i className="fa-solid fa-moon" style={{ color: "#34495e" }}></i>
        </li>
      </ul>
    </div>
  );
}
