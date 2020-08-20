import React, { useState, Fragment } from "react";

import { BLOG_POSTS } from "../src/database/index";

import Layout from "../src/components/00_template/Layout";
import Blog from "../src/components/05_by-serena/blog/Blog";
import BackBtn from "../src/components/00_template/BackBtn";

import colors from "../styles/theme";

const BySerenaBlog = () => {
  const [state, setState] = useState("BLOG_HOME");
  const [blogTitle, setBlogTitle] = useState("");

  function renderList(posts) {
    function handleBtnClick(title) {
      setState("BLOG_POST");
      setBlogTitle(title);
    }

    function renderImg(pic) {
      const PIC_PATH = `/images/05_by-serena/blog/${pic}`;
      return (
        <div className="img-container">
          <img src={PIC_PATH} />
          <style jsx>
            {`
              .img-container {
                display: flex;
                justify-content: center;
                height: 200px;
                width: 100%;
                background: url(${PIC_PATH});
                background-size: cover;
                margin-bottom: 1rem;
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

    function renderTitle(title) {
      return (
        <div className="title-container">
          <h1>{title}</h1>
          <style jsx>
            {`
              .title-container {
                width: 100%;
                text-align: center;
              }
              h1 {
                font-size: 1rem;
                font-weight: 500;
                margin-bottom: 1rem;
                color: ${colors.pink.d};
              }
            `}
          </style>
        </div>
      );
    }

    function renderDate(date) {
      return (
        <div className="date-container">
          <p>{date}</p>
          <style jsx>
            {`
              .date-container {
                display: flex;
                justify-content: flex-end;
                width: 100%;
              }
              p {
                color: gray;
                font-family: Montserrat;
                font-size: 0.9rem;
              }
            `}
          </style>
        </div>
      );
    }

    function renderTags(tags) {
      return (
        <div className="tags-container">
          <p>{tags.map((tag) => `#${tag} `)}</p>
          <style jsx>
            {`
              .tags-container {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                text-align: right;
              }
              p {
                color: ${colors.gray.xxd};
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <Fragment>
        <div className="blog-landing-container">
          <div className="btn-container">
            <BackBtn href="/by-serena" />
          </div>
          {posts.map((post) => (
            <button key={post.id} onClick={() => handleBtnClick(post.title)}>
              {renderImg(post.pic)}
              {renderTitle(post.title)}
              {renderDate(post.date)}
              {renderTags(post.tags)}
            </button>
          ))}
        </div>
        <style jsx>
          {`
            .btn-container {
              margin-right: 2rem;
              padding-top: 0.7rem;
            }
            .blog-landing-container {
              padding: 3rem;
              display: flex;
              width: 100vw;
              height: calc(100vh - 6rem);
            }
            button {
              display: flex;
              flex-direction: column;
              text-align: left;
              height: 400px;
              width: 450px;
              padding: 1rem;
              background: #fff;
              transition: all 0.15s;
              color: ${colors.blue.l};
              margin-right: 2rem;
              cursor: pointer;
              border: 0;
              box-shadow: 3px 3px 10px ${colors.gray.d};
            }
            button:hover {
              transform: translateY(-6px);
              box-shadow: 3px 3px 10px ${colors.pink.m};
            }
            button:hover {
              color: ${colors.blue.main};
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderBlog(title, setState) {
    return <Blog title={title} setState={(arg) => setState(arg)} />;
  }

  switch (state) {
    case "BLOG_HOME":
      return <Layout>{renderList(BLOG_POSTS)}</Layout>;
    case "BLOG_POST":
      return <Layout>{renderBlog(blogTitle, setState)}</Layout>;
  }
};

export default BySerenaBlog;
