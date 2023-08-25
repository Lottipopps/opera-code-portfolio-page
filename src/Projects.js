import React from "react";
import "./Projects.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import DictionaryApp from "./images/Dictionary-App.png";
import CharlieTheHomebaker from "./images/Charlie-The-Homebaker.png";
import WorldClock from "./images/World-Clock.png";
import ReactWeatherApp from "./images/React-Weather-App.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <div className="row">
          <h3>Project gallery</h3>
        </div>
        <Cards />
      </div>
    </div>
  );
}
