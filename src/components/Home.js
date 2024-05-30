import React from "react";
import Navbar from "./Navbar";
import WebDev from "./WebDev";
import Info from "./Info";
import Socials from "./Socials";
const Home = () => {
  return (
    <>
      <Navbar />
        <WebDev />
      <section id="info">
        <Info />
      </section>
    <section>
      <Socials />
    </section>
    </>
  );
};

export default Home;
