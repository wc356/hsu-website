// Libraries
import React, { Fragment } from "react";
// Components
import Layout from "../src/components/00_template/Layout";
import BackBtn from "../src/components/00_template/BackBtn";
import VideoList from "../src/components/00_template/VideoList";
// Database
import { PROJECTS } from "../src/database/index";

const BySerenaProjects = () => {
  const renderProjects = () => {
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
                  margin-bottom: 3rem;
                  text-align: justify;
                  text-justify: inter-word;
                  line-height: 1.5rem;
                  width: 70vw;
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
            width="70vw"
            height="30rem"
            justify={true}
          />
          {renderDescription(proj.behind_scenes)}
          <style jsx>
            {`
              .hidden-gems-container {
                text-align: center;
                padding-top: 2rem;
              }
            `}
          </style>
        </div>
      );
    }

    function renderBackBtn() {
      return (
        <div className="button-container">
          <div className="button-container__padding">
            <BackBtn href="/by-serena" />
          </div>
          <style jsx>
            {`
              .button-container {
                display: flex;
                justify-content: center;
              }
              .button-container__padding {
                width: 70vw;
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <div className="projects-list">
        <section className="hidden-gems">
          {renderHiddenGems(PROJECTS.HIDDEN_GEMS)}
        </section>
        {renderBackBtn()}
        <style jsx>{`
          .projects-list {
            padding: 3rem 0;
          }
          .hidden-gems {
            margin-bottom: 3rem;
          }
        `}</style>
      </div>
    );
  };

  return (
    <Layout>
      <div className="projects-container">{renderProjects()}</div>
      <style jsx>
        {`
          .projects-container {
            min-height: 90vh;
          }
        `}
      </style>
    </Layout>
  );
};

export default BySerenaProjects;
