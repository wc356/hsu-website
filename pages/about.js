import React from "react";

import Layout from "../src/components/00_template/Layout";
import AboutBio from "../src/components/02_about/AboutBio";
import ImageProfile from "../src/components/02_about/ImageProfile";

const AboutPage = () => (
  <Layout>
    <div className="container">
      <AboutBio />
      <ImageProfile />
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          height: 92vh;
        }

        @media screen and (max-width: 1400px) {
          .container {
            flex-direction: column;
            align-items: center;
            height: 100%;
            width: 100vw;
          }
        }
      `}
    </style>
  </Layout>
);

export default AboutPage;
