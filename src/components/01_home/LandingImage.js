// Libraries
import React from "react";
// Database
import { HOME_LANDING_PIC, HOME_LANDING_TEXT } from "../../database/index";
// Styles
import colors from "../../../styles/theme";

const LandingImage = () => {
  const arrowStyle = `5px solid ${colors.black.l}`;

  function renderLandingText(text) {
    return (
      <div className="text-container">
        <h1>{text.title}</h1>
        <h2>{text.body}</h2>
        <style jsx>
          {`
            .text-container {
              padding-top: 11rem;
              padding-left: 3rem;
              font-weight: 400;
              color: ${colors.black.m};
              line-height: 3rem;
              text-align: left;
              width: 50%;
            }
            h1 {
              font-weight: 500;
              margin-bottom: 4rem;
              font-size: 7rem;
              line-height: 5rem;
              font-family: Dallastown;
            }
            h2 {
              font-family: Montserrat;
              font-size: 1.2rem;
              font-weight: 500;
            }
          `}
        </style>
      </div>
    );
  }

  function renderArrow() {
    return (
      <div className="arrow-container">
        <span role="graphic-arrow" />
        <style jsx>
          {`
            .arrow-container {
              width: 100%;
              height: 100%;
              bottom: 0;
              left: 0;
              position: absolute;
              display: flex;
              justify-content: center;
            }
            span {
              position: absolute;
              bottom: 7rem;
              height: 80px;
              width: 80px;
              border-bottom: ${arrowStyle};
              border-right: ${arrowStyle};
              display: block;
              transform: rotate(45deg);
              animation: arrow-down infinite 1.5s;
            }
            @keyframes arrow-down {
              0% {
                transform: rotate(45deg) translate(0, 0);
              }
              25% {
                transform: rotate(45deg) translate(2.2rem, 2.2rem);
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <>
      <div className="img-wrapper">
        <div className="landing-picture">
          {renderLandingText(HOME_LANDING_TEXT)}
        </div>
        {renderArrow()}
      </div>
      <style jsx>
        {`
          .img-wrapper {
            height: 900px;
            overflow: hidden;
            text-align: center;
          }
          .landing-picture {
            height: 100%;
            background-image: url(${HOME_LANDING_PIC.src});
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default LandingImage;
