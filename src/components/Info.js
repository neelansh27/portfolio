import React from "react";
import "../css/Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Info = () => {
  return (
    <div id="info-container">
      <div className="about">
        <h2 className="col-head">About Me</h2>
        <div>
          <div id="dp"></div>
        </div>
        <div className="intro">
          Adipisicing aut sed distinctio commodi corrupti Ratione soluta
          accusantium itaque explicabo sequi expedita. Beatae corporis aperiam
          odit sapiente ipsum Dicta natus itaque quo reprehenderit debitis.
          Eaque iure nemo quos sunt vel quasi. Modi necessitatibus cumque omnis
          saepe ad rem Exercitationem quod hic omnis quis deserunt Enim sit
          facilis quis fuga odio atque? Maiores voluptates quos nesciunt itaque
          nam. Minima animi excepturi minima consequuntur rerum Placeat
          consectetur similique ea illo?
        </div>
      </div>
      <div className="skills">
    <h2 className="col-head">Skills</h2>
        <ul className="skill-list">
          <li>
            <FontAwesomeIcon icon="fa-brands fa-html5" />
            <span className="lang-name">HTML</span>
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "60%" }}></div>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
            <span className="lang-name">CSS</span>
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "35%" }}></div>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-js" />
            <span className="lang-name">JavaScript</span>
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "70%" }}></div>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-node-js" />
            <span className="lang-name">NodeJS</span>
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "60%" }}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
