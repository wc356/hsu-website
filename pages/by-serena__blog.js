import React, { useState, Fragment } from "react";
import Link from "next/link";

import { BLOG_POSTS } from "../src/database/index";

import Layout from "../src/components/00_template/Layout";
import Blog from "../src/components/05_by-serena/blog/Blog";
import BackBtn from "../src/components/00_template/BackBtn";
import Footer from "../src/components/00_template/Footer";

import colors from "../styles/theme";

const BySerenaBlog = () => {
  function renderList(posts) {
    function renderBackBtn() {
      return (
        <div className="btn-container">
          <BackBtn href="/by-serena" />
          <style jsx>
            {`
              .btn-container {
                margin-right: 2rem;
                padding-top: 0.7rem;
              }
              @media only screen and (max-width: 900px) {
                .btn-container {
                  margin-bottom: 2rem;
                  width: 100%;
                  margin-left: 2rem;
                }
              }
            `}
          </style>
        </div>
      );
    }

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
          {renderBackBtn()}
          {posts.map((post) => (
            <Link key={post.id} href="/blog/[blog]" as={`/blog/${post.title}`}>
              <a>
                {renderImg(post.pic)}
                {renderTitle(post.title)}
                {renderDate(post.date)}
                {renderTags(post.tags)}
              </a>
            </Link>
          ))}
        </div>
        <style jsx>
          {`
            .blog-landing-container {
              padding: 3rem;
              display: flex;
              width: 100vw;
              min-height: calc(100vh - 6rem);
            }
            a {
              display: flex;
              flex-direction: column;
              text-align: left;
              height: 400px;
              max-width: 450px;
              padding: 1rem;
              background: #fff;
              transition: all 0.15s;
              color: ${colors.blue.l};
              margin-right: 2rem;
              box-shadow: 3px 3px 10px ${colors.gray.d};
            }
            a:hover {
              transform: translateY(-6px);
              box-shadow: 3px 3px 10px ${colors.pink.m};
              color: ${colors.blue.main};
            }
            @media only screen and (max-width: 900px) {
              .blog-landing-container {
                flex-direction: column;
                align-items: center;
                padding: 1rem;
              }
              a {
                margin-right: 0;
                margin-bottom: 1rem;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderBlog(title) {
    return <Blog title={title} />;
  }

  return <Layout>{renderList(BLOG_POSTS)}</Layout>;
};

export default BySerenaBlog;
