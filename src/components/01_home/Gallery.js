import React from "react";

import { galleryPics } from "../../database/01_home/index";

const Gallery = () => {
  const GalleryPictures = () => (
    <div className="image-gallery">
      {galleryPics["pics"].map((pic) => {
        const picPath = galleryPics.rootDir + "/" + pic.picName;
        return (
          <a key={pic.id} href={picPath} className={`img-${pic.id}`}>
            <ion-icon size="large" name="scan-outline"></ion-icon>
          </a>
        );
      })}

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
              "img-9 img-7 img-10 img-10";
          }

          .image-gallery a {
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

          .image-gallery a ion-icon {
            color: rgba(255, 255, 255, 0.6);
            font-size: 3rem;
            position: relative;
            z-index: 100;
            padding: 1rem 3rem;
            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 0.4rem;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .image-gallery a::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 0;
            transition: opacity 0.2s;
          }

          .image-gallery a:hover .icon,
          .image-gallery a:hover::before {
            opacity: 1;
          }

          .img-1 {
            grid-area: img-1;
            min-height: 51.5rem;
            background-image: url("${galleryPics.rootDir}/IMG_0001.jpg");
          }
          .img-2 {
            grid-area: img-2;
            background-image: url("${galleryPics.rootDir}/IMG_0002.jpg");
          }
          .img-3 {
            grid-area: img-3;
            background-image: url("${galleryPics.rootDir}/IMG_0003.jpg");
          }
          .img-4 {
            grid-area: img-4;
            background-image: url("${galleryPics.rootDir}/IMG_0004.jpg");
          }
          .img-5 {
            grid-area: img-5;
            min-height: 51.5rem;
            background-image: url("${galleryPics.rootDir}/IMG_0005.jpg");
          }
          .img-6 {
            grid-area: img-6;
            background-image: url("${galleryPics.rootDir}/IMG_0006.jpg");
          }
          .img-7 {
            grid-area: img-7;
            min-height: 51.5rem;
            background-image: url("${galleryPics.rootDir}/IMG_0007.jpg");
          }
          .img-8 {
            grid-area: img-8;
            background-image: url("${galleryPics.rootDir}/IMG_0008.jpg");
          }
          .img-9 {
            grid-area: img-9;
            background-image: url("${galleryPics.rootDir}/IMG_0009.jpg");
          }
          .img-10 {
            grid-area: img-10;
            background-image: url("${galleryPics.rootDir}/IMG_0010.jpg");
          }

          @media screen and (max-width: 900px) {
            .image-gallery {
            }
          }
        `}
      </style>
    </div>
  );

  return (
    <section className="gallery-container">
      <GalleryPictures />

      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            max-width: 120rem;
            margin: auto;
            padding: 0 1.5rem;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
