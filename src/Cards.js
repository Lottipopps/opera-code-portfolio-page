import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DictionaryApp from "./images/Dictionary-App.png";
import CharlieTheHomebaker from "./images/Charlie-The-Homebaker.png";
import WorldClock from "./images/World-Clock.png";
import ReactWeatherApp from "./images/React-Weather-App.png";

export default function Cards() {
  const projects = [
    {
      href: "https://dazzling-creponne-967adf.netlify.app/",
      src: DictionaryApp,
      name: "Dictionary App",
      description: "React.js • API Integration • Responsive Development",
    },
    {
      href: "https://cerulean-sunshine-2df967.netlify.app/",
      src: ReactWeatherApp,
      name: "React Weather App",
      description:
        "React.js • API Integration • Responsive Development • JavaScript timestamp",
    },
    {
      href: "https://cosmic-truffle-090e28.netlify.app/",
      src: WorldClock,
      name: "World Clock App",
      description: "API Integration • JavaScript timestamp",
    },
    {
      href: "https://peaceful-dasik-b0d092.netlify.app/gallery",
      src: CharlieTheHomebaker,
      name: "Charlie The Homebaker Portfolio App",
      description:
        "Vanilla JS • Vanilla CSS • Responsive Development • Multi-page Hosting",
    },
  ];

  return (
    <div className="Cards">
      <div className="row">
        {projects.map(function (project, index) {
          return (
            <div key={index} className="col-sm-6">
              <div className="card project">
                <a href={project.href} target="_blank" rel="noreferrer">
                  <img
                    src={project.src}
                    className="card-img-top"
                    alt={project.name}
                  />
                </a>
                <div className="card-body">
                  <h6>{project.name}</h6>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
