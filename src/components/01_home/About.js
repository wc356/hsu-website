// Libraries
import React from "react";
import Markdown from "react-markdown";
// Database
import { HOME_ABOUT_DESCR } from "../../database/index";
// Styles
import colors from "../../../styles/theme";
import styles from "./About.module.scss";

const About = () => (
  <article className="about-container">
    <Markdown className={styles.markdown} source={HOME_ABOUT_DESCR} />
    <style jsx>
      {`
        .about-container {
          padding: 5rem 15rem;
          background: ${colors.gray.l};
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
      `}
    </style>
  </article>
);

export default About;
