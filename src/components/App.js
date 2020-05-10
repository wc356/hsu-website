import React from "react";

import Layout from "./Layout";
import LandingImage from "./LandingImage";
import About from "./About";
import Gallery from "./Gallery";

const App = () => {
  return (
    <Layout>
      <LandingImage />
      <About />
      <Gallery />
    </Layout>
  );
};

export default App;
