// Libraries
import React from "react";
import { Carousel } from "react-responsive-carousel";
// Components
import Layout from "../src/components/00_template/Layout";

const GalleryPage = () => {
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
        {renderImg("/images/IMG_0878.jpg", "red-dress-standing-1")}
        {renderImg("/images/IMG_9457.jpg", "red-dress-standing-2")}
        {renderImg("/images/IMG_0915.jpg", "red-dress-standing-back")}
        {renderImg("/images/IMG_9456.jpg", "red-dress-chair")}
        {renderImg("/images/IMG_0960.jpg", "black-dress-chair")}
        {renderImg("/images/IMG_9653.jpg", "velvet-dress-black-backgr")}
        {renderImg("/images/IMG_9656.jpg", "velvet-dress-curtain")}
        {renderImg("/images/IMG_1086.jpg", "white-dress-sitting")}
        {renderImg("/images/IMG_1133.jpg", "white-dress-standing")}
        {renderImg("/images/IMG_1374.jpg", "white-dress-sitting-floor")}
        {renderImg("/images/Fontainebleau_Jack.jpg", "fontainebleau-jack")}
        {renderImg("/images/IMG_0629.jpg", "viola-playing-with-friend")}
        {renderImg("/images/Fontainebleau_Paris.jpg", "fontainebleau-paris")}
        {renderImg("/images/recital_CLE.png", "recital-cle")}
        {renderImg("/images/Cecil_Competition_UK.png", "cecil-competition")}
        {renderImg("/images/centrum_SQ.jpg", "centrum")}
        {renderImg("/images/IMG_4601.jpg", "black-n-white-playing-viola")}
        {renderImg("/images/Birmingham_UK.png", "black-n-white-birmingham")}
      </Carousel>
    </Layout>
  );
};

export default GalleryPage;
