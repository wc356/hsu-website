import React from "react";

const ImageProfile = () => (
  <>
    <section className="image-profile" />

    <style jsx>
      {`
        .image-profile {
          display: flex;
          width: 50vw;
          background-image: url("/images/IMG_1133.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        @media screen and (max-width: 1400px) {
          .image-profile {
            order: 1;
            height: 1000px;
            width: 100%;
          }
        }
      `}
    </style>
  </>
);

export default ImageProfile;
