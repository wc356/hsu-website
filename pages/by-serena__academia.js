import React, { Fragment } from "react";

import { ACADEMIA_POSTS, AUTHOR_ABOUT } from "../src/database/index";
import Layout from "../src/components/00_template/Layout";
import BackBtn from "../src/components/00_template/BackBtn";

import colors from "../styles/theme";

const BySerenaAcademia = () => {
  function renderArticles() {
    return ACADEMIA_POSTS.map((post) => {
      const title = post.title;
      const desc = post.desc;
      const src = post.src;
      const author = AUTHOR_ABOUT.name;
      const type = post.type;
      const tagColor = () => {
        switch (type) {
          case "opinion":
            return "lightcoral";
          case "essay":
            return "dodgerblue";
          case "article":
            return "olive";
        }
      };

      function renderTitle(title) {
        return (
          <Fragment>
            <h2 className="title">{title}</h2>
            <style jsx>
              {`
                .title {
                  font-size: 1.4rem;
                }
              `}
            </style>
          </Fragment>
        );
      }

      function renderAuthor(auth) {
        return (
          <Fragment>
            <h2 id="author">{auth}</h2>
            <style jsx>
              {`
                #author {
                  margin-bottom: 0.5rem;
                  font-weight: 300;
                  text-decoration: underline;
                  font-size: 1rem;
                }
              `}
            </style>
          </Fragment>
        );
      }

      function renderDescription(desc) {
        return (
          <Fragment>
            <p>{desc}</p>
            <style jsx>
              {`
                p {
                  margin-bottom: 0.5rem;
                }
              `}
            </style>
          </Fragment>
        );
      }

      function renderTag(tag) {
        return (
          <Fragment>
            <span id="tag">{tag}</span>
            <style jsx>
              {`
                #tag {
                  display: inline-block;
                  box-shadow: 0 0 8px ${tagColor()};
                  background: ${tagColor()};
                  color: white;
                  padding: 0.3rem 0.5rem;
                  font-size: 0.65rem;
                  font-family: Montserrat;
                  font-weight: 600;
                  border-radius: 0 14px 14px 0;
                }
              `}
            </style>
          </Fragment>
        );
      }

      return (
        <a href={src} target="_blank" rel="nofollow noopener noreferrer">
          <div className="text-container">
            {renderTitle(title)}
            <div className="text__descr-container">
              {renderAuthor(author)}
              {renderDescription(desc)}
              {renderTag(type)}
            </div>
          </div>
          <style jsx>
            {`
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
              .text-container {
                padding-left: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              }
            `}
          </style>
        </a>
      );
    });
  }

  return (
    <Layout>
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
    </Layout>
  );
};

export default BySerenaAcademia;
