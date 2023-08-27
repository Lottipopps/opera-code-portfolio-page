import React from "react";
import "./CV.css";
import DevResume from "./Carlotta_Missiroli___Dev_Resume.pdf";
import Story from "./images/story.svg";
import CodeThink from "./images/code-think.svg";

export default function CV() {
  return (
    <div className="CV">
      <div className="container">
        <div className="row">
          <object
            type="image/svg+xml"
            data={CodeThink}
            alt="thinking coder"
          ></object>
        </div>
        <div className="row">
          <h4>click below to know my journey</h4>
          <a href={DevResume} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
        <div className="row">
          <object
            type="image/svg+xml"
            data={Story}
            className="second"
            alt="storyteller coder"
          ></object>
        </div>
      </div>
    </div>
  );
}
