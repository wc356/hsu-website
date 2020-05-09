import React from "react";

import Layout from "./Layout";
import imagesGallery from "../database/images";

const App = () => {
  const renderImages = () => {
    console.log(imagesGallery["home"]);
    // imagesGallery["home"].map((image) => (
    //   <a href={`/images/home/${image.name}`} className="img-1">
    //     <ion-icon name="scan-outline"></ion-icon>
    //   </a>
    imagesGallery["home"].map((image) => {
      console.log(image.name);
      return (
        <a href={`/images/home/${image.name}`} className="img-1">
          <ion-icon name="scan-outline"></ion-icon>
        </a>
      );
    });
  };

  return (
    <Layout>
      <div className="background">
        <div className="name">
          <h1>Serena Hsu</h1>
        </div>
      </div>
      <section className="about">
        <h1>About</h1>
        <p>
          Violist Serena Hsu is currently pursuing a master’s degree at The
          Juilliard School. She has studied at The Cleveland Institute of Music,
          the Paris Conservatoire, and the International Musicians Seminar in
          Prussia Cove, England. Her main mentors include Hsin-Yun Huang, Misha
          Amory, Jean Sulem, Lynne Ramsey, and Jeffrey Irvine. She is a
          prizewinner of various competitions, including YoungArts, the Ohio
          Viola Society Competition, Saint Paul String Quartet Competition, and
          the OSTA Chamber Music Competition. Additionally, she has competed at
          the Fischoff National Chamber Music Competition, was a finalist at the
          American Viola Society Competition, and semi-finalist of the Cecil
          Aronowitz International Viola Competition in England. Serena is an
          avid chamber musician and dedicated pedagogue.
        </p>
      </section>
      <section className="gallery">{renderImages()}</section>
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
    </Layout>
  );
};

export default App;
