import React from "react";

import Layout from "./Layout";
import imagesGallery from "../database/images";

const App = () => {
  const About = () => (
    <section className="about">
      <h1>About</h1>
      <p>
        Violist Serena Hsu is currently pursuing a master’s degree at The
        Juilliard School. She has studied at The Cleveland Institute of Music,
        the Paris Conservatoire, and the International Musicians Seminar in
        Prussia Cove, England. Her main mentors include Hsin-Yun Huang, Misha
        Amory, Jean Sulem, Lynne Ramsey, and Jeffrey Irvine. She is a
        prizewinner of various competitions, including YoungArts, the Ohio Viola
        Society Competition, Saint Paul String Quartet Competition, and the OSTA
        Chamber Music Competition. Additionally, she has competed at the
        Fischoff National Chamber Music Competition, was a finalist at the
        American Viola Society Competition, and semi-finalist of the Cecil
        Aronowitz International Viola Competition in England. Serena is an avid
        chamber musician and dedicated pedagogue.
      </p>

      <style jsx>
        {`
          section {
            padding: 5rem 20rem;
          }

          section h1 {
            padding: 2rem 0;
            font-size: 4rem;
          }

          section p {
            font-size: 1.3rem;
            line-height: 3;
          }
        `}
      </style>
    </section>
  );

  const Gallery = () => (
    <section className="gallery-container">
      <div className="image-gallery">
        {imagesGallery["home"].map((image) => (
          <a href={`/images/home/${image.name}`} className={`img-${image.id}`}>
            <ion-icon size="large" name="scan-outline"></ion-icon>
          </a>
        ))}
      </div>

      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            max-width: 120rem;
            margin: auto;
            padding: 0 1.5rem;
          }

          .image-gallery {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 1.5rem;
            grid-template-areas:
              "img-1 img-1 img-2 img-3"
              "img-1 img-1 img-4 img-5"
              "img-6 img-7 img-8 img-5"
              "img-9 img-7 img-8 img-5";
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
            background-image: url("/images/home/IMG_0001.jpg");
          }
          .img-2 {
            grid-area: img-2;
            background-image: url("/images/home/IMG_0002.jpg");
          }
          .img-3 {
            grid-area: img-3;
            background-image: url("/images/home/IMG_0003.jpg");
          }
          .img-4 {
            grid-area: img-4;
            background-image: url("/images/home/IMG_0004.jpg");
          }
          .img-5 {
            grid-area: img-5;
            min-height: 51.5rem;
            background-image: url("/images/home/IMG_0005.jpg");
          }
          .img-6 {
            grid-area: img-6;
            background-image: url("/images/home/IMG_0006.jpg");
          }
          .img-7 {
            grid-area: img-7;
            min-height: 51.5rem;
            background-image: url("/images/home/IMG_0007.jpg");
          }
          .img-8 {
            grid-area: img-8;
            background-image: url("/images/home/IMG_0008.jpg");
          }
          .img-9 {
            grid-area: img-9;
            background-image: url("/images/home/IMG_0009.jpg");
          }
        `}
      </style>
    </section>
  );

  return (
    <Layout>
      <div className="background" />
      <About />
      <Gallery />

      <style jsx>
        {`
          .background {
            background: url("/images/IMG_1385.jpg") no-repeat center center;
            background-size: cover;
            height: 100vh;
          }

          .background .name {
            position: absolute;
            font-size: 3.5rem;
            top: 15rem;
            color: gray;
            left: 15rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default App;
