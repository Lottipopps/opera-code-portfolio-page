import React from "react";
import "./CV.css";
import DevResume from "./Carlotta_Missiroli___Dev_Resume.pdf";

export default function CV() {
  return (
    <div className="CV">
      <h4>Just click below to know my journey</h4>
      <a href={DevResume} target="_blank" rel="noreferrer">CV</a>
    </div>
  );
}
