import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 first">
            <h6>Useful links to learn how to code 🫶</h6>
            <ul>
              <li>
                <a
                  href="https://www.shecodes.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SheCodes
                </a>{" "}
                by Matt Delac and his team, excellent for beginners!
              </li>
              <li>
                <a
                  href="https://www.khanacademy.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Khan Academy
                </a>{" "}
                not just for coding, and completely free!
              </li>
              <li>
                <a href="https://www.codecademy.com/">Codecademy</a> good for
                everything Tech-related and available in monthly plans!
              </li>
              <li>
                <a href="https://www.freecodecamp.org/learn/">FreeCodeCamp</a>,
                just as it says on the label, free and very complete, just not
                very beginner friendly.
              </li>
            </ul>
          </div>
          <div className="col-sm-6 second">
            <h6>Contact me</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/Lottipopps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carlottamissirolisoprano-developer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:lotpop.chocolateuk@gmail.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
            <p>lotpop.chocolateuk@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
