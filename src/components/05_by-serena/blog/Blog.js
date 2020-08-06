// Libraries
import React from "react";
// Database
import { BLOG_POSTS, AUTHOR_ABOUT } from "../../../database/index";
// Styles
import colors from "../../../../styles/theme";

const Blog = ({ title, setState }) => {
  const post = BLOG_POSTS.find((post) => post.title === title);

  const renderImg = (pic) => {
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
  };

  const renderTitle = (title) => (
    <div className="title-container">
      <h1>{title}</h1>
      <hr />
      <style jsx>
        {`
          .title-container {
            display: flex;
            flex-direction: column;
            align-items: center;
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

  const renderReadTime = (readTime) => (
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

  const renderAuthorSocial = (date) => {
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
  };

  const renderBody = (textArray) => (
    <section className="content">
      {textArray.map((text) => (
        <article>
          <p>{text}</p>
        </article>
      ))}
      <button onClick={() => setState("BLOG_HOME")}>
        <i id="icon-arrow" />
        BACK
      </button>
      <style jsx>
        {`
          .content {
            padding: 1rem 0;
          }
          .content article {
            padding: 1rem 0;
            line-height: 1.75;
            color: ${colors.black.l};
          }
          button {
            margin-top: 1rem;
            padding: 0.75rem;
            cursor: pointer;
            border: 0;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            background: ${colors.gray.l};
            transition: all 0.15s;
          }
          button #icon-arrow {
            content: "";
            width: 10px;
            height: 10px;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            transform: rotate(135deg);
            margin-right: 8px;
          }
          button:hover {
            background: lightgray;
          }
        `}
      </style>
    </section>
  );

  const renderFooter = (tags) => {
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
              text-align: left;
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
  };

  const renderFooterNavbar = (authorDesc) => {
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
              text-align: left;
              line-height: 1.5rem;
            }
          `}
        </style>
      </section>
    );
  };

  return (
    <>
      {renderImg(post.pic)}
      <div className="header-container">
        {renderTitle(post.title)}
        <section className="header-items">
          {renderReadTime(post.read_time)}
          {renderAuthorSocial(post.date)}
          {renderBody(post.body)}
          {renderFooter(post.tags)}
          {renderFooterNavbar(AUTHOR_ABOUT)}
        </section>
      </div>
      <style jsx>
        {`
          .header-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            background: #fff;
            height: 100%;
            padding: 4.5rem 20%;
            position: relative;
          }
          .header-items {
            margin-top: 3rem;
            vertical-align: middle;
          }
        `}
      </style>
    </>
  );
};

export default Blog;
