// Libraries
import React from "react";
// Components
import Layout from "../src/components/00_template/Layout";
import LandingImage from "../src/components/01_home/LandingImage";
import About from "../src/components/01_home/About";
import ConcertsSchedule from "../src/components/01_home/ConcertsSchedule";
import Gallery from "../src/components/01_home/Gallery";
import ContactMe from "../src/components/01_home/ContactMe";

const Home = () => (
  <Layout>
    <LandingImage />
    <About />
    <ConcertsSchedule />
    <Gallery />
    <ContactMe />
  </Layout>
);

export default Home;
