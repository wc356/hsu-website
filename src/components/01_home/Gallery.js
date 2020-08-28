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
