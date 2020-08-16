import React from "react";
import Markdown from "react-markdown";
import { HOME_PAGE } from "../../database/index";

import colors from "../../../styles/theme";
import styles from "./About.module.scss";

const About = () => (
  <article className="about-container">
    <Markdown className={styles.markdown} source={HOME_PAGE.about} />
    <style jsx>
      {`
        .about-container {
          padding: 5rem 15rem;
        }
        @media screen and (max-width: 1400px) {
          .about-container {
            padding: 7rem;
          }
        }
        @media screen and (max-width: 960px) {
          .about-container {
            padding: 3rem;
          }
        }
        @media only screen and (max-width: 280px) {
          .about-container {
            padding: 1.5rem;
          }
        }
      `}
    </style>
  </article>
);

export default About;
