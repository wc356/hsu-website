// Libraries
import React from "react";
// Database
import { ACADEMIA_POSTS, AUTHOR_ABOUT } from "../src/database/index";
// Components
import Layout from "../src/components/00_template/Layout";
import BackBtn from "../src/components/00_template/BackBtn";
// Styles
import colors from "../styles/theme";

const BySerenaAcademia = () => {
  const renderAcademia = () => {
    const renderArticles = () =>
      ACADEMIA_POSTS.map((post) => {
        const title = post.title;
        const descr = post.descr;
        const src = post.src;
        const author = AUTHOR_ABOUT.name;
        const type = post.type;
        const tag = () => {
          switch (type) {
            case "opinion":
              return "lightcoral";
            case "essay":
              return "dodgerblue";
            case "article":
              return "olive";
          }
        };

        return (
          <a href={src} target="_blank" rel="nofollow noopener noreferrer">
            <span id="marker" />
            <div className="text-container">
              <h2 className="title">{title}</h2>
              <div className="text__descr-container">
                <h2 id="author">{author}</h2>
                <p>{descr}</p>
                <span id="tag">{type}</span>
              </div>
            </div>
            <style jsx>
              {`
                #author {
                  font-weight: 300;
                  text-decoration: underline;
                  font-size: 1rem;
                }
                #tag {
                  display: inline-block;
                  background: ${tag()};
                  color: white;
                  padding: 0.3rem 0.5rem;
                  font-size: 0.65rem;
                  font-family: Montserrat;
                  font-weight: 600;
                  border-radius: 0 14px 14px 0;
                }
                a {
                  display: flex;
                  padding: 1rem;
                  background: ${colors.gray.xxl};
                  border: 0;
                  margin-bottom: 2rem;
                  min-height: 145px;
                  transition: all 0.1s;
                  box-shadow: 3px 3px 8px ${colors.gray.d};
                }
                a:hover {
                  background: ${colors.gray.l};
                }
                a:hover h2 {
                  text-decoration: underline;
                }
                .title {
                  font-size: 1.4rem;
                }
                .title,
                #author {
                  text-align: left;
                }
                #author {
                  margin-bottom: 0.5rem;
                }
                .text-container {
                  padding-left: 1rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  height: 100%;
                }
                p {
                  margin-bottom: 0.5rem;
                }
              `}
            </style>
          </a>
        );
      });

    return (
      <div className="academia-container">
        {renderArticles()}
        <BackBtn href="/by-serena" />
        <style jsx>
          {`
            .academia-container {
              min-height: 90vh;
              padding: 3rem 5rem;
            }
          `}
        </style>
      </div>
    );
  };
  return <Layout>{renderAcademia()}</Layout>;
};

export default BySerenaAcademia;
