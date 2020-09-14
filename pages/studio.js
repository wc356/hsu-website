import React, { Fragment } from "react";
import Head from "next/head";
import Markdown from "react-markdown";
import Layout from "../src/components/00_template/Layout";
// import ContactBtn from "../src/components/00_template/ContactBtn";
import { STUDIO_PAGE } from "../src/database/index";
import styles from "../src/components/04_studio/studio.module.scss";

export default function StudioPage() {
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
            @media only screen and (max-width: 640px) {
              .title-container {
                margin: 5rem 1rem;
              }
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
            @media only screen and (max-width: 800px) {
              .img-container {
                margin: 0 1rem 0.5rem 0;
              }
            }
            @media only screen and (max-width: 480px) {
              .img-container {
                width: 40%;
                margin: 0 1rem 0.5rem 0;
              }
            }
            @media only screen and (max-width: 430px) {
              .img-container {
                float: none;
                width: 100%;
                max-height: 515px;
              }
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
          @media only screen and (max-width: 430px) {
            text-align: center;
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

  function renderSlogan(text) {
    return <Markdown className={styles.markdown} source={text} />;
  }

  function renderFormLink({ link, text }) {
    return (
      <a href={link} target="_blank" rel="nofollow noopener noreferrer">
        {text}
        <style jsx>
          {`
            a {
              display: flex;
              justify-content: center;
              background: pink;
              padding: 1rem;
              font-family: Montserrat;
              color: #000;
              font-weight: 500;
              letter-spacing: 1px;
              border-radius: 1.5rem;
              transition: all 0.15s;
            }
            a:hover {
              background: aquamarine;
            }
          `}
        </style>
      </a>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{STUDIO_PAGE.page_title}</title>
      </Head>
      <div className="studio-container">
        {renderPageTitle({
          title: STUDIO_PAGE.main_title,
          subTitle: STUDIO_PAGE.sub_title,
        })}
        <div className="studio__body">
          {renderImage(STUDIO_PAGE.img)}
          {renderBodyTitle(STUDIO_PAGE.body_title)}
          {renderBodyContent(STUDIO_PAGE.body)}
          {renderSlogan(STUDIO_PAGE.slogan)}
          {renderFormLink(STUDIO_PAGE.form)}
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
            @media only screen and (max-width: 640px) {
              .studio__body {
                padding: 0 1rem;
                padding-bottom: 3rem;
              }
            }
            @media only screen and (max-width: 430px) {
              .studio-container {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
