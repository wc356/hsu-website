import React from "react";

const LandingImage = () => (
  <>
    <div className="img-wrapper">
      <img src="/images/IMG_1385.jpg" alt="picuture-with-viola" />
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
