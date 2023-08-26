import React from "react";
import "./Projects.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";

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
