import React from "react";
import { landingPic } from "../../database/01_home/index";

const LandingImage = () => (
  <>
    <div className="img-wrapper">
      <img src={landingPic.src} alt={landingPic.alt} />
    </div>

    <style jsx>
      {`
        .img-wrapper {
          width: 100%;
          height: 100%;
        }

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}
    </style>
  </>
);

export default LandingImage;
