import React from "react";

import { HOME_LANDING_PICTURE as landingPic } from "../../database/index";

import colors from "../../../styles/theme";

const LandingImage = () => {
  const arrowStyle = `3px solid ${colors.blue.l}`;

  return (
    <>
      <div className="img-wrapper">
        <div id="img" />
        <div className="arrow-container">
          <span role="graphic-arrow" />
        </div>
      </div>
      <style jsx>
        {`
          .img-wrapper {
            padding: 7rem 10rem;
            height: 900px;
            overflow: hidden;
          }
          #img {
            background-image: url(${landingPic.src});
            height: 100%;
            background-attachment: fixed;
            // background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
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
    </>
  );
};

export default LandingImage;
