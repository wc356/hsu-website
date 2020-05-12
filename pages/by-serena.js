import React from "react";

import Layout from "../src/components/Layout";
import colors from "../styles/theme";

export default function BySerena() {
  const ImageSection = () => (
    <section className="image">
      <img src="/images/IMG_1385.jpg" alt="#" />

      <style jsx>
        {`
          .image {
            width: 80%;
            height: 100%;
          }

          .image img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}
      </style>
    </section>
  );

  const HeadSection = () => {
    const BlogBody = () => (
      <section className="content">
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

    return (
      <section className="head">
        <h1>Blog Title Here.</h1>
        <div className="head-items">
          <p>
            <span>
              <ion-icon name="alarm-outline" />
            </span>{" "}
            <span>3 Minute read</span>
          </p>
          <div className="footer">
            <div className="profile">
              <div className="profile--pic">
                <img src="/images/IMG_0878.jpg" alt="#" />
              </div>
              <div className="profile--text-date">
                <p>
                  <span>Serena Hsu</span> | October 99, 2080
                </p>
                <p>
                  <span className="italic">share</span> F | P | T
                </p>
              </div>
            </div>
          </div>
        </div>

        <BlogBody />

        <style jsx>
          {`
            .head {
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              background: #fff;
              width: 70%;
              height: 100%;
              transform: translateY(-50%);
              padding: 3.5rem;
            }
            .head h1 {
              font-family: "Baskervville", serif;
              font-size: 2.5rem;
              font-weight: 300;
            }
            .head h1::after {
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

            .head-items {
              margin-top: 3rem;
              vertical-align: middle;
            }
            .head-items span {
              display: inline-block;
              vertical-align: middle;
            }
            .head-items p {
              font-family: Montserrat;
              text-align: center;
              color: ${colors.gray.xd};
            }

            .footer {
              display: flex;
              text-align: left;
              justify-item: space-between;
            }

            .profile {
              display: flex;
              align-items: center;
              width: 100%;
            }
            .profile .profile--text-date {
              display: flex;
              width: 100%;
              justify-content: space-between;
              padding-left: 1rem;
            }
            .profile .profile--text-date span {
              vertical-align: baseline;
              font-weight: 600;
            }
            .profile .profile--text-date .italic {
              font-weight: 400;
              font-style: italic;
            }

            .profile--pic {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              overflow: hidden;
            }
            .profile--pic img {
              width: 250%;
              transform: translateX(-48%) translateY(-5%);
            }
          `}
        </style>
      </section>
    );
  };

  return (
    <Layout>
      <div className="flex-column">
        <ImageSection />
        <HeadSection />
        <section className="nav"></section>
        <section className="related-posts"></section>
      </div>

      <style jsx>
        {`
          .flex-column {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </Layout>
  );
}
