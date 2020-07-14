import React from "react";
import { Carousel } from "react-responsive-carousel";

import Layout from "../src/components/00_template/Layout";

export default () => {
  const renderImg = (imgPath, alt) => (
    <div className="img-container">
      <img src={imgPath} alt={alt} />
      <style jsx>
        {`
          .img-container {
            height: 45rem;
            object-fit: contain;
          }
          img {
            object-fit: contain;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
  return (
    <Layout>
      <Carousel autoPlay={true} infiniteLoop={true}>
        {renderImg("/images/Birmingham_UK.png", "birmingham")}
        {renderImg("/images/Cecil_Competition_UK.png", "cecil-competition")}
        {renderImg("/images/centrum_SQ.jpg", "centrum")}
        {renderImg("/images/Fontainebleau_Jack.jpg", "fontainebleau-jack")}
        {renderImg("/images/Fontainebleau_Paris.jpg", "fontainebleau-paris")}
        {renderImg("/images/IMG_0878.jpg", "")}
        {renderImg("/images/IMG_0629.jpg", "")}
        {renderImg("/images/IMG_0878.jpg", "")}
        {renderImg("/images/IMG_0915.jpg", "")}
        {renderImg("/images/IMG_0960.jpg", "")}
        {renderImg("/images/IMG_1086.jpg", "")}
        {renderImg("/images/IMG_1133.jpg", "")}
        {renderImg("/images/IMG_1374.jpg", "")}
        {renderImg("/images/IMG_4601.jpg", "")}
        {renderImg("/images/IMG_9456.jpg", "")}
        {renderImg("/images/IMG_9457.jpg", "")}
        {renderImg("/images/IMG_9653.jpg", "")}
        {renderImg("/images/IMG_9656.jpg", "")}
        {renderImg("/images/recital_CLE.png", "recital-cle")}
      </Carousel>
    </Layout>
  );
};
