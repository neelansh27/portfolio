import "../css/Projects.css";
const Projects = () => {
  return (
    <div className="proj-container">
      <h2 className="col-head">Projects</h2>
      <ul id="project-list">
        <li className="project-item">
        <img src="https://i.ibb.co/zVKTPdf/Copy-Q-Hr-HMij.png" alt="temp" />
          <div>
            <h4>
              <a href="https://blogpress-client.vercel.app/" target={"_blank"}>
                BlogPress
              </a>
            </h4>
            <span>
              BlogPress is a blog posting platform built using React and NodeJS.
              It has a simple and minimalistic User Interface and provides all
              basic features like creating blog posts, adding comments, user
              profiles and more.
            </span>
          </div>
        </li>
        <li className="project-item">
          <img
            src="https://i.ibb.co/RSxbnkg/Copy-Q-v-Sg-VDG.png"
            alt="landing_page"
          />
          <div>
            <h4>
              <a
                href="https://legalnavigator-m4aw.onrender.com"
                target={"_blank"}
              >
                LegalNavigator
              </a>
            </h4>
            <span>
              A platform which allows people to stay legally informed. It has
              features like check current court cases, summarize legal texts,
              connect with experts and more. It is built using HTML, CSS,
              JavaScript & Flask.&lrm;
            </span>
          </div>
        </li>
        <li className="project-item">
    <img src="https://i.ibb.co/bK3Sd2L/image.png" alt="image" />
    <div>
            <h4>
              <a
                href="https://github.com/neelansh27/Domestic-Aid-Frontend"
                target={"_blank"}
              >
                Domestic Aid Using Computer Vision
              </a>
            </h4>
            An application which checks if appliances are running in unoccupied
            rooms and sends information of appliance misuse to the concerned
            person. It is build using HTML,CSS and JavaScript and Flask is used
            in Back-end.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
