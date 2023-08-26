import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoDay from "./images/Opera-Code-Logo-Day.png";
import LogoNight from "./images/Opera-Code-Logo-Night.png";

export default function Navbar() {
  let [yesDark, setYesDark] = useState(false);
  function setMode() {
    setYesDark(!yesDark);
  }

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
        <li onClick={setMode}>
          <i className="fa-solid fa-sun" style={{ color: "#34495e" }}></i>
          {"   "}
          <i className="fa-solid fa-moon" style={{ color: "#34495e" }}></i>
        </li>
      </ul>
    </nav>
  );
}
