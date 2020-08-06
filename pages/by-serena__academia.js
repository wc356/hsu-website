// Libraries
import React from "react";
// Database
import { ACADEMIA_POSTS, AUTHOR_ABOUT } from "../src/database/index";
// Components
import Layout from "../src/components/00_template/Layout";
// Styles
import colors from "../styles/theme";

const BySerenaAcademia = () => {
  const renderAcademia = () => {
    const renderArticles = () =>
      ACADEMIA_POSTS.map((post) => {
        const title = post.title;
        const descr = post.descr;
        const author = AUTHOR_ABOUT.name;

        return (
          <button>
            <img src="" alt="" />
            <div className="text-container">
              <h2 className="title">{title}</h2>
              <h2 id="author">{author}</h2>
              <p>{descr}</p>
            </div>
            <style jsx>
              {`
                #author {
                  font-weight: 300;
                  text-decoration: underline;
                  font-size: 1rem;
                }
                button {
                  display: flex;
                  cursor: pointer;
                  padding: 1rem;
                  background: ${colors.gray.xxl};
                  border: 0;
                  width: 65rem;
                  margin-bottom: 2rem;
                  height: 132px;
                  transition: all 0.1s;
                  box-shadow: 3px 3px 8px ${colors.gray.d};
                }
                button:hover {
                  background: ${colors.gray.l};
                }
                button:hover h2 {
                  text-decoration: underline;
                }
                img {
                  height: 100px;
                  width: 100px;
                  background: pink;
                }
                .title,
                #author {
                  text-align: left;
                  margin-bottom: 0.5rem;
                }
                .text-container {
                  padding-left: 1rem;
                }
                p {
                }
              `}
            </style>
          </button>
        );
      });

    return (
      <div className="academia-container">
        {renderArticles()}
        <style jsx>
          {`
            .academia-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 2rem;
            }
          `}
        </style>
      </div>
    );
  };
  return <Layout>{renderAcademia()}</Layout>;
};

export default BySerenaAcademia;
