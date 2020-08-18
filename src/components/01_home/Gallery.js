import React from "react";
import { HOME_GALLERY_PICS } from "../../database/index";

const Gallery = () => {
  function renderGalleryPics(pics) {
    return (
      <div className="image-gallery">
        {pics.pics.map((pic) => (
          <a
            key={pic.id}
            href={`${HOME_GALLERY_PICS.rootDir}/${pic.picName}`}
            className={`img-${pic.id}`}
          />
        ))}
        <style jsx>
          {`
          .image-gallery {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 1.5rem;
            grid-template-areas:
              "img-1 img-1 img-2 img-3"
              "img-1 img-1 img-4 img-5"
              "img-6 img-7 img-8 img-5"
              "img-9 img-9 img-10 img-10";
          }
          a {
            width: 100%;
            height: 25rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          a::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 0;
            transition: opacity 0.2s;
          }
          a:hover::before {
            opacity: 1;
          }
          .img-1 {
            grid-area: img-1;
            min-height: 51.5rem;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0001.jpg");
          }
          .img-2 {
            grid-area: img-2;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0002.jpg");
          }
          .img-3 {
            grid-area: img-3;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0003.jpg");
          }
          .img-4 {
            grid-area: img-4;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0004.jpg");
          }
          .img-5 {
            grid-area: img-5;
            min-height: 51.5rem;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0005.jpg");
          }
          .img-6 {
            grid-area: img-6;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0006.jpg");
          }
          .img-7 {
            grid-area: img-7;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0007.jpg");
          }
          .img-8 {
            grid-area: img-8;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0008.jpg");
          }
          .img-9 {
            grid-area: img-9;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0009.jpg");
          }
          .img-10 {
            grid-area: img-10;
            background-image: url("${HOME_GALLERY_PICS.rootDir}/IMG_0010.jpg");
          }
          @media only screen and (max-width: 450px) {
            .image-gallery {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              grid-gap: 0;
              grid-template-areas:
              "img-1"
              "img-2" 
              "img-3"
              "img-4"
              "img-5"
              "img-6"
              "img-7"
              "img-8"
              "img-9"
               "img-10"
            }
            .img-1 {
              min-height: 0;
              border: 1px solid black;
            }
            .img-5 {
              min-height: 0;
            }
          }
        `}
        </style>
      </div>
    );
  }

  return (
    <section className="gallery-container">
      {renderGalleryPics(HOME_GALLERY_PICS)}
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            max-width: 120rem;
            margin: auto;
            padding: 10rem;
          }
          @media only screen and (max-width: 450px) {
            .gallery-container {
              margin: 0;
              padding: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
