import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../src/components/00_template/Layout";
import BackBtn from "../src/components/00_template/BackBtn";
import VideoList from "../src/components/00_template/VideoList";
import { PROJECTS_PAGE } from "../src/database/index";

const BySerenaProjects = () => {
  function renderHiddenGems(proj) {
    function renderTitle(title, subTitle) {
      return (
        <Fragment>
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          <style jsx>
            {`
              h1 {
                font-weight: 500;
                font-size: 7rem;
                margin-bottom: 1rem;
                font-family: Dallastown;
              }
              h3 {
                margin-bottom: 5rem;
                font-weight: 400;
              }
            `}
          </style>
        </Fragment>
      );
    }

    function renderDescription(proj) {
      return (
        <div className="description-container">
          <h3>{proj.title}</h3>
          {proj.body.map((pgph) => (
            <article>{pgph}</article>
          ))}
          <style jsx>
            {`
              .description-container {
                margin-top: 7rem;
                margin-bottom: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              h3 {
                margin-bottom: 4rem;
                font-size: 2rem;
                font-weight: 400;
              }
              article {
                text-align: left;
                margin-bottom: 1rem;
                text-align: justify;
                text-justify: inter-word;
                line-height: 1.5rem;
                width: 100%;
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <div className="hidden-gems-container">
        {renderTitle(proj.title, proj.sub_title)}
        <VideoList
          videos={proj.videos}
          columns="1"
          width="100%"
          height="30rem"
          justify={false}
        />
        {renderDescription(proj.behind_scenes)}
        <style jsx>
          {`
            .hidden-gems-container {
              text-align: center;
              padding-top: 2rem;
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }

  function renderBackBtn() {
    return <BackBtn href="/by-serena" />;
  }

  return (
    <Layout>
      <Head>
        <title>{PROJECTS_PAGE.page_title}</title>
      </Head>
      <div className="projects-list">
        <section className="hidden-gems">
          {renderHiddenGems(PROJECTS_PAGE.HIDDEN_GEMS)}
        </section>
        {renderBackBtn()}
      </div>
      <style jsx>
        {`
          .projects-list {
            padding: 3rem 10vw;
          }
          @media only screen and (max-width: 400px) {
            .projects-list {
              padding: 3rem 1rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default BySerenaProjects;
