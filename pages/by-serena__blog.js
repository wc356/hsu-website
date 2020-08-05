// Libraries
import React, { useState, Fragment } from "react";
// Database
import { BLOG_POSTS } from "../src/database/index";
// Components
import Layout from "../src/components/00_template/Layout";
import Blog from "../src/components/05_by-serena/blog/Blog";
// Styles
import colors from "../styles/theme";

const bySerenaBlog = () => {
  const [state, setState] = useState("BLOG_HOME");
  const [blogTitle, setBlogTitle] = useState("");

  const renderList = (posts) => {
    const handleBtnClick = (title) => {
      setState("BLOG_POST");
      setBlogTitle(title);
    };

    const renderImg = (pic) => {
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
    };

    const renderTags = (tags) => (
      <div className="container">
        <p>{tags.map((tag) => `#${tag} `)}</p>
        <style jsx>
          {`
            .container {
              text-align: right;
            }
            p {
              color: ${colors.gray.xxd};
            }
          `}
        </style>
      </div>
    );

    return (
      <div className="blog-landing-container">
        {posts.map((post) => (
          <button key={post.id} onClick={() => handleBtnClick(post.title)}>
            {renderImg(post.pic)}
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div className="tags-container">{renderTags(post.tags)}</div>
          </button>
        ))}
        <style jsx>
          {`
            .blog-landing-container {
              padding: 3rem;
              display: flex;
              width: 100vw;
              height: calc(100vh - 6rem);
              background: #f0f0f0;
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
              box-shadow: 3px 3px 10px #bdd6ff;
            }
            button:hover {
              color: ${colors.blue.main};
            }
            h1 {
              font-size: 1rem;
              font-weight: 500;
              margin-bottom: 1rem;
            }
            p {
              color: gray;
              font-family: Montserrat;
              font-size: 0.9rem;
            }
            .tags-container {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
            }
          `}
        </style>
      </div>
    );
  };

  const renderBlog = (title, setState) => (
    <Blog title={title} setState={(arg) => setState(arg)} />
  );

  const renderBlogApp = () => {
    switch (state) {
      case "BLOG_HOME":
        return renderList(BLOG_POSTS);
      case "BLOG_POST":
        return renderBlog(blogTitle, setState);
    }
  };

  return <Layout>{renderBlogApp()}</Layout>;
};

export default bySerenaBlog;
