import { React, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import OperaHero from "./OperaHero";
import Projects from "./Projects";
import CV from "./CV";
import Contacts from "./Contacts";
import Footer from "./Footer";
import LogoDay from "./images/Opera-Code-Logo-Day.png";
import LogoNight from "./images/Opera-Code-Logo-Night.png";

function App() {
  let [yesDark, setYesDark] = useState(false);
  function setMode() {
    setYesDark(!yesDark);
  }
  return (
    <div className="App">
      <div className={yesDark ? "dark-mode" : ""}>
        <nav className="Navbar sticky-top">
          <ul className="d-flex justify-content-between">
            <li>
              <Link to="/">
                {yesDark ? (
                  <img src={LogoNight} alt="Logo-Night" />
                ) : (
                  <img src={LogoDay} alt="Logo-Day" />
                )}
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
              <Link to="/contacts">Contact me</Link>
            </li>
            <li onClick={setMode}>
              {yesDark ? (
                <i className="fa-solid fa-sun" style={{ color: "#62929a" }}></i>
              ) : (
                <i
                  className="fa-solid fa-moon"
                  style={{ color: " #5c5757" }}
                ></i>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<OperaHero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
