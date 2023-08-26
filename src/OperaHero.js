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
            <div className="name">Carlotta Missiroli</div>
          </h1>
          <br />
          <h2>Junior Frontend Developer (React.js) and Opera Singer</h2>
          <p className="description">Please fill in text here</p>
        </div>

        <img src={Profilephoto} alt="prophile" />
      </header>
    </div>
  );
}
