import React from "react";

import colors from "../../../../styles/theme";

const BlogBody = () => {
  const BlogTitle = () => (
    <>
      <h1>Blog Title Here.</h1>

      <style jsx>
        {`
          h1 {
            font-family: "Baskervville", serif;
            font-size: 2.5rem;
            font-weight: 400;
          }

          h1::after {
            position: absolute;
            content: "";
            width: 5%;
            height: 1px;
            background: ${colors.gray.xd};
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 130px;
          }
        `}
      </style>
    </>
  );

  const BlogReadTime = () => (
    <p>
      <span>
        <ion-icon name="alarm-outline" />
      </span>{" "}
      <span>3 Minute read</span>
      <style jsx>
        {`
          p {
            font-family: Montserrat;
            text-align: center;
            color: ${colors.gray.xd};
          }

          span {
            display: inline-block;
            vertical-align: middle;
          }
        `}
      </style>
    </p>
  );

  const BlogAuthorSocial = () => (
    <div className="profile-container">
      <div className="profile">
        <div className="profile__pic">
          <img src="/images/IMG_0878.jpg" alt="#" />
        </div>
        <div className="profile__text-date">
          <p>
            <span>Serena Hsu</span> | October 99, 2080
          </p>
          <p>
            <span className="italic">share</span> F | P | T
          </p>
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
            color: ${colors.gray.xd};
          }
          .profile__text-date span {
            vertical-align: baseline;
            font-weight: 600;
          }
          .profile__text-date .italic {
            font-weight: 400;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );

  const BlogMainContent = () => (
    <section className="content">
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>

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
        `}
      </style>
    </section>
  );

  const BlogFooter = () => (
    <section className="nav">
      <div className="flex-container">
        <div className="left">
          <h1>Tags:</h1>
          <p>
            <span>#Music #Concert #Travel #Viola</span>
          </p>
        </div>
        <div className="right">
          <a href="#">SHARE</a>
        </div>
      </div>

      <style jsx>
        {`
          .nav {
            height: 100%;
            margin-top: 2rem;
            color: ${colors.black.l};
          }
          .nav::before,
          .nav::after {
            content: "";
            background: ${colors.gray.m};
            height: 1px;
            width: 90%;
            position: absolute;
            margin: 0 auto;
            transform: translateX(-50%);
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
            padding: 2.2rem 2rem;
            align-items: center;
          }
          .flex-container .left {
            text-align: left;
          }

          h1 {
            padding-bottom: 1rem;
          }

          a {
            text-decoration: underline;
          }
        `}
      </style>
    </section>
  );

  return (
    <div className="header-container">
      <BlogTitle />
      <section className="header-items">
        <BlogReadTime />
        <BlogAuthorSocial />
        <BlogMainContent />
        <BlogFooter />
      </section>

      <style jsx>
        {`
          .header-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            background: #fff;
            width: 70%;
            height: 100%;
            padding: 4.5rem;
            position: relative;
            transform: translateY(-500px);
          }

          .header-items {
            margin-top: 3rem;
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
};

export default BlogBody;
