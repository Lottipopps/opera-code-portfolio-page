import React from "react";
import "./OperaHero.css";
import Profilephoto from "./images/Profile-photo.png";

export default function OperaHero() {
  return (
    <div className="OperaHero">
      <header>
        <div className="title">
          <h1>
            <span className="hello">Hi!</span> I am{" "}
            <span className="name">Carlotta Missiroli</span>
          </h1>
          <br />
          <h2>Junior Frontend Developer (React.js) and Opera Singer</h2>
        </div>

        <img src={Profilephoto} alt="prophile" />
      </header>
    </div>
  );
}
