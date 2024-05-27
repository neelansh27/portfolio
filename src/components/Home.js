import React from "react";
import Navbar from "./Navbar";
import WebDev from "./WebDev";
import Info from "./Info";
const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <WebDev />
      </section>
      <section>
        <Info />
      </section>
    </>
  );
};

export default Home;
