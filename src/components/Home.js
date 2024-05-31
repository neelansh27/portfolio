import React from "react";
import Navbar from "./Navbar";
import WebDev from "./WebDev";
import Info from "./Info";
import Socials from "./Socials";
import Projects from "./Projects";
const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <WebDev />
      </section>
      <section id="info">
        <Info />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Socials />
      </section>
    </>
  );
};

export default Home;
