import React from "react";
import Layout from "../src/components/00_template/Layout";
import { ABOUT_PAGE } from "../src/database/index";

const AboutPage = () => {
  function renderAboutText(text) {
    return (
      <ul>
        {text.map((txt, i) => (
          <article key={i}>{txt}</article>
        ))}
        <style jsx>
          {`
            ul {
              padding: 0 4rem;
            }
            article {
              margin: 2rem 0;
              font-size: 1rem;
              line-height: 2rem;
              text-align: justify;
              text-justify: inter-word;
            }
          `}
        </style>
      </ul>
    );
  }

  function renderAboutPic(pic) {
    return (
      <div className="image-container">
        <img src={pic.src} alt={pic.alt} />
        <style jsx>
          {`
            .image-container {
              align-self: center;
            }
            img {
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <Layout>
      <div className="about-container">
        {renderAboutText(ABOUT_PAGE.text)}
        {renderAboutPic(ABOUT_PAGE.pic)}
      </div>
      <style jsx>
        {`
          .about-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            min-height: 90vh;
          }
        `}
      </style>
    </Layout>
  );
};

export default AboutPage;
