import React from "react";
import Head from "next/head";

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
            @media only screen and (max-width: 960px) {
              ul {
                grid-area: text;
              }
            }
            @media only screen and (max-width: 400px) {
              ul {
                padding: 0 1rem;
              }
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
            @media only screen and (max-width: 960px) {
              .image-container {
                grid-area: pic;
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{ABOUT_PAGE.page_title}</title>
      </Head>
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
          @media only screen and (max-width: 960px) {
            .about-container {
              grid-template-columns: 1fr;
              grid-template-areas:
                "pic"
                "text";
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default AboutPage;
