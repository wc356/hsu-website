// Libraries
import React, { useState } from "react";
// Database
import { BLOG_POSTS } from "../src/database/index";
// Components
import Layout from "../src/components/00_template/Layout";
import Blog from "../src/components/05_by-serena/blog/Blog";
// Styles
import colors from "../styles/theme";

export default () => {
  const [state, setState] = useState("BLOG_HOME");
  const [blogTitle, setBlogTitle] = useState("");

  const renderList = (posts) => {
    const handleBtnClick = (title) => {
      setState("BLOG_POST");
      setBlogTitle(title);
    };

    return (
      <div className="blog-landing-container">
        {posts.map((post) => (
          <button key={post.id} onClick={() => handleBtnClick(post.title)}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
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
              height: 200px;
              width: 200px;
              border: 1px solid lightgray;
              border-radius: 10px;
              padding: 1rem;
              background: #fff;
              transition: all 0.15s;
              color: ${colors.blue.l};
              margin-right: 2rem;
              cursor: pointer;
            }
            button:hover {
              transform: translateY(-6px);
              box-shadow: 3px 3px 10px #bdd6ff;
            }
            button:hover {
              color: ${colors.blue.main};
            }
            h1 {
              font-size: 1.2rem;
              font-weight: 500;
              margin-bottom: 1rem;
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
