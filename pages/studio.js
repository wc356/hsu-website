// Libraries
import React, { Fragment } from "react";
// Components
import Layout from "../src/components/00_template/Layout";
import ContactBtn from "../src/components/00_template/ContactBtn";
// Database
import { STUDIO } from "../src/database/index";

const StudioPage = () => {
  function renderPageTitle({ title, subTitle }) {
    return (
      <div className="title-container">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <style jsx>
          {`
            .title-container {
              text-align: center;
              margin: 5rem;
            }
            h1 {
              margin: 1rem;
              font-size: 2.5rem;
              font-weight: 500;
            }
            h3 {
              font-weight: 400;
            }
          `}
        </style>
      </div>
    );
  }

  function renderImage(imgObj) {
    return (
      <div className="img-container">
        <img src={imgObj.src} alt={imgObj.alt} />
        <style jsx>
          {`
            .img-container {
              width: 30%;
              display: flex;
              float: left;
              margin: 0 3rem 3rem 0;
            }
            img {
              height: auto;
              width: 100%;
              object-fit: cover;
            }
          `}
        </style>
      </div>
    );
  }

  function renderBodyTitle(title) {
    return (
      <Fragment>
        <h3>{title}</h3>
        <style jsx>{`
          h3 {
            font-weight: 400;
            font-size: 2rem;
          }
        `}</style>
      </Fragment>
    );
  }

  function renderBodyContent(body) {
    return body.map((prgph) => (
      <Fragment>
        <article>{prgph}</article>
        <style jsx>
          {`
            article {
              margin: 2rem 0;
              text-align: justify;
              line-height: 1.6rem;
            }
          `}
        </style>
      </Fragment>
    ));
  }

  return (
    <Layout>
      <div className="studio-container">
        {renderPageTitle({
          title: STUDIO.page_title,
          subTitle: STUDIO.sub_title,
        })}
        <div className="studio__body">
          {renderImage(STUDIO.img)}
          {renderBodyTitle(STUDIO.body_title)}
          {renderBodyContent(STUDIO.body)}
          <ContactBtn
            email={STUDIO.contact_btn.email}
            text={STUDIO.contact_btn.text}
          />
        </div>
        <style jsx>
          {`
            .studio-container {
              min-height: 90vh;
            }
            .studio__body {
              padding: 0 6rem;
              padding-bottom: 3rem;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default StudioPage;
