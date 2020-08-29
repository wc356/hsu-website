import React from "react";
import { HOME_PAGE } from "../../database/index";
import styles from "../../../styles/gallery/Gallery.module.scss";

const Gallery = () => {
  const GAL_ROOT = HOME_PAGE.gallery.rootDir;
  const GAL_PICS = HOME_PAGE.gallery.pics;

  function renderGalleryPics(pics) {
    return (
      <div className={styles.gallery}>
        {pics.map(({ id, picName }) => (
          <a key={id} href={`${GAL_ROOT}/${picName}`} className={`img-${id}`} />
        ))}
        <style jsx>
          {`
            .img-1 {
              grid-area: img-1;
              min-height: 51.5rem;
              background-image: url("${GAL_ROOT}/IMG_0001.jpg");
            }
            .img-2 {
              grid-area: img-2;
              background-image: url("${GAL_ROOT}/IMG_0002.jpg");
            }
            .img-3 {
              grid-area: img-3;
              background-image: url("${GAL_ROOT}/IMG_0003.jpg");
            }
            .img-4 {
              grid-area: img-4;
              background-image: url("${GAL_ROOT}/IMG_0004.jpg");
            }
            .img-5 {
              grid-area: img-5;
              min-height: 51.5rem;
              background-image: url("${GAL_ROOT}/IMG_0005.jpg");
            }
            .img-6 {
              grid-area: img-6;
              background-image: url("${GAL_ROOT}/IMG_0006.jpg");
            }
            .img-7 {
              grid-area: img-7;
              background-image: url("${GAL_ROOT}/IMG_0007.jpg");
            }
            .img-8 {
              grid-area: img-8;
              background-image: url("${GAL_ROOT}/IMG_0008.jpg");
            }
            .img-9 {
              grid-area: img-9;
              background-image: url("${GAL_ROOT}/IMG_0009.jpg");
            }
            .img-10 {
              grid-area: img-10;
              background-image: url("${GAL_ROOT}/IMG_0010.jpg");
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <section className="gallery-container">
      {renderGalleryPics(GAL_PICS)}
    </section>
  );
};

export default Gallery;
