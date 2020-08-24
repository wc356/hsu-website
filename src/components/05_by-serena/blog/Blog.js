import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Markdown from "react-markdown";

import Layout from "../../00_template/Layout";
import BackBtn from "../../00_template/BackBtn";

import { BLOG_POSTS, AUTHOR_ABOUT } from "../../../database/index";

import colors from "../../../../styles/theme";
import styles from "./Blog.module.scss";

const Blog = () => {
  const router = useRouter();
  const title = router.query.blog;

  console.log(router);
  console.log(title);

  const post = BLOG_POSTS.find((post) => post.title === title);

  function renderImg(pic) {
    const PIC_PATH = `/images/05_by-serena/blog/${pic}`;
    return (
      <div className="img-container">
        <img src={PIC_PATH} />
        <style jsx>
          {`
            .img-container {
              height: 500px;
              overflow: hidden;
              background: url(${PIC_PATH});
              background-size: cover;
              display: flex;
              align-items: center;
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
        <hr />
        <style jsx>
          {`
            .title-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            h1 {
              font-family: "Baskervville", serif;
              font-size: 2.5rem;
              font-weight: 400;
            }
            hr {
              height: 1px;
              border-width: 0;
              background: ${colors.gray.xd};
              width: 90px;
              margin-top: 2rem;
            }
          `}
        </style>
      </div>
    );
  }

  function renderReadTime(readTime) {
    return (
      <p>
        <i>
          <ion-icon name="alarm-outline" />
        </i>{" "}
        <span>{`${readTime} Minute read`}</span>
        <style jsx>
          {`
            p {
              font-family: Montserrat;
              text-align: center;
              color: ${colors.gray.xd};
            }
            i {
              display: inline-block;
              vertical-align: middle;
            }
          `}
        </style>
      </p>
    );
  }

  function renderAuthorSocial(date) {
    const renderShareLinks = () => (
      <p>
        <span>share</span> F | P | T
        <style jsx>
          {`
            span {
              font-weight: 400;
              font-style: italic;
            }
          `}
        </style>
      </p>
    );

    return (
      <div className="profile-container">
        <div className="profile">
          <div className="profile__pic">
            <img src="/images/IMG_0878.jpg" alt="#" />
          </div>
          <div className="profile__text-date">
            <p>
              <span>Serena Hsu</span> {` | ${date}`}
            </p>
            {renderShareLinks()}
          </div>
        </div>
        <style jsx>
          {`
            .profile-container {
              display: flex;
              text-align: left;
              justify-item: space-between;
            }
            .profile {
              display: flex;
              align-items: center;
              width: 100%;
            }
            .profile__pic {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              overflow: hidden;
            }
            .profile__pic img {
              width: 250%;
              transform: translateX(-48%) translateY(-5%);
            }
            .profile__text-date {
              display: flex;
              width: 100%;
              justify-content: space-between;
              padding-left: 1rem;
              font-family: Montserrat;
              text-align: center;
              color: ${colors.gray.xxd};
            }
            .profile__text-date span {
              vertical-align: baseline;
              font-weight: 600;
            }
          `}
        </style>
      </div>
    );
  }

  function renderBody(textArray) {
    return (
      <section className="content">
        {textArray.map((text, i) => (
          <article key={i}>
            <Markdown className={styles.markdown} source={text} />
          </article>
        ))}
        <div className="btn-container">
          <BackBtn href="/by-serena__blog" />
        </div>
        <style jsx>
          {`
            .content {
              padding: 1rem 0;
            }
            article {
              padding: 1rem 0;
              line-height: 1.75;
              color: ${colors.black.l};
            }
            .btn-container {
              margin-top: 1.5rem;
            }
          `}
        </style>
      </section>
    );
  }

  function renderBlogFooter(tags) {
    const renderTags = (tags) => (
      <>
        <h1>Tags:</h1>
        <p>{tags.map((tag) => `#${tag} `)}</p>
        <style jsx>
          {`
            h1 {
              padding-bottom: 1rem;
            }
            p {
              color: ${colors.gray.xxd};
            }
          `}
        </style>
      </>
    );

    const renderLink = (href, text) => <a href={href}>{text}</a>;

    return (
      <section className="footer">
        <hr />
        <div className="flex-container">
          <div className="flex-left">{renderTags(tags)}</div>
          <div className="flex-right">{renderLink("#", "SHARE")}</div>
        </div>
        <hr />
        <style jsx>
          {`
            a {
              text-decoration: underline;
            }
            .footer {
              margin-top: 2rem;
              color: ${colors.black.l};
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
              padding: 2.2rem 0;
              align-items: center;
            }
            .flex-left {
              max-width: 45rem;
            }
            hr {
              height: 1px;
              border-width: 0;
              background: ${colors.gray.xd};
            }
          `}
        </style>
      </section>
    );
  }

  function renderBlogFooterNav(authorDesc) {
    const renderAuthorPic = () => (
      <section className="author-pic">
        <img src="/images/IMG_0878.jpg" alt="#" />
        <style jsx>
          {`
            .author-pic {
              width: 110px;
              height: 110px;
              border-radius: 50%;
              overflow: hidden;
            }
            .author-pic img {
              width: 250%;
              transform: translateX(-48%) translateY(-5%);
            }
          `}
        </style>
      </section>
    );

    const renderAuthorDesc = (authorDesc) => (
      <section className="author-desc">
        <h1>{authorDesc.name}</h1>
        <p>{authorDesc.location}</p>
        <p>{authorDesc.description}</p>
        <style jsx>
          {`
            .author-desc {
              margin-left: 1.5rem;
            }
            p {
              color: ${colors.gray.xxd};
            }
          `}
        </style>
      </section>
    );

    return (
      <section className="navbar">
        <div className="flex-left">
          {renderAuthorPic()}
          {renderAuthorDesc(authorDesc)}
        </div>
        <div className="flex-right" />
        <style jsx>
          {`
            .navbar {
              display: flex;
              padding: 2.2rem 0;
              justify-content: space-between;
            }
            .flex-left {
              display: flex;
              align-items: center;
              line-height: 1.5rem;
            }
          `}
        </style>
      </section>
    );
  }

  return (
    <Layout>
      {renderImg(post.pic)}
      <div className="header-container">
        {renderTitle(post.title)}
        <section className="header-items">
          {renderReadTime(post.read_time)}
          {renderAuthorSocial(post.date)}
          {renderBody(post.body)}
          {renderBlogFooter(post.tags)}
          {renderBlogFooterNav(AUTHOR_ABOUT)}
        </section>
      </div>
      <style jsx>
        {`
          .header-container {
            display: flex;
            flex-direction: column;
            background: #fff;
            height: 100%;
            padding: 4.5rem 20%;
            position: relative;
          }
          .header-items {
            margin-top: 3rem;
            vertical-align: middle;
          }
          @media only screen and (max-width: 400px) {
            .header-container {
              padding: 4.5rem 1rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
