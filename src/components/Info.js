import React from "react";
import "../css/Info.css";
const Info = () => {
  return (
    <div className="info-container">
      <div className="about">
        <h2>About Me</h2>
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
        <ul className="skill-list">
          <li>
            HTML
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "60%" }}></div>
            </div>
          </li>
          <li>
            CSS
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "35%" }}></div>
            </div>
          </li>
          <li>
            JavaScript
            <div className="bar-container">
              <div className="bar" style={{ "--prog": "70%" }}></div>
            </div>
          </li>
          <li>
            NodeJS
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
