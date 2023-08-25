import { React } from "react";
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
    },
    {
      href: "https://cerulean-sunshine-2df967.netlify.app/",
      src: ReactWeatherApp,
      name: "React Weather App",
    },
    {
      href: "https://cosmic-truffle-090e28.netlify.app/",
      src: WorldClock,
      name: "World Clock App",
    },
    {
      href: "https://peaceful-dasik-b0d092.netlify.app/gallery",
      src: CharlieTheHomebaker,
      name: "Charlie The Homebaker Portfolio App",
    },
  ];

  return (
    <div className="Cards">
      <div className="row">
        {projects.map(function (project, index) {
          return (
            <span key={index}>
              <div className="col-6">
                <span className="card project">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <img
                      src={project.src}
                      className="card-img-top"
                      alt={project.name}
                    />
                  </a>
                  <div className="card-body">
                    <h6>{project.name}</h6>
                    <p className="card-text"></p>
                  </div>
                </span>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
}
