import React, { Fragment } from "react";
import { HOME_PAGE } from "../../database/index";
import colors from "../../../styles/theme";

const LandingImage = () => {
  const arrowStyle = `5px solid ${colors.black.l}`;
  const backImg = HOME_PAGE.pic.src;
  const landingTxt = HOME_PAGE.text;

  function renderLandingText(txt) {
    return (
      <div className="text-container">
        <h1>{txt.title}</h1>
        <h2>{txt.body}</h2>
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
              // text-shadow: 5px 5px #fff;
              text-shadow: 7px 7px 2px ${colors.pink.l};
            }
            h2 {
              font-family: Montserrat;
              font-size: 1.2rem;
              font-weight: 500;
            }
            @media only screen and (max-width: 450px) {
              .text-container {
                width: 100%;
                line-height 2rem;
                padding: 1rem;
                margin-top: 55vw;
              }
              h1 {
                font-size: 13vw;
                margin-bottom: .2rem;
                padding-left: 0;
                text-align: center;
              }
              h2 {
                font-size: 3vw;
              }
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
            @media only screen and (max-width: 450px) {
              span {
                height: 8vw;
                width: 8vw;
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="img-wrapper">
        <div className="landing-pic">{renderLandingText(landingTxt)}</div>
        {renderArrow()}
      </div>
      <style jsx>
        {`
          .img-wrapper {
            height: 900px;
            overflow: hidden;
            text-align: center;
          }
          .landing-pic {
            height: 100%;
            background-image: url(${backImg});
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            box-shadow: inset 0 0 30px #fff;
          }
          @media only screen and (max-width: 450px) {
            .landing-pic {
              background-position: 0% 20%;
              background-size: 100%;
            }
          }
          @media only screen and (max-width: 768px) {
            .landing-pic {
              background-size: 100%;
              background-position: 30% 20%;
            }
          }
          @media only screen and (max-width: 1024px) {
            .landing-pic {
              background-size: 100%;
              background-position: 0 30%;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default LandingImage;
