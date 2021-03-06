import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/00_template/Layout";
import { BY_SERENA_PAGE } from "../src/database/index";
import colors from "../styles/theme";

const BySerena = () => {
  function renderNavSection({ path, num, title }) {
    return (
      <Link href={path}>
        <a className="flex-item">
          <div className="marker">
            <h1>{num}</h1>
            <p>{title}</p>
          </div>
          <style jsx>{`
            .flex-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              width: 100%;
              cursor: pointer;
              transition: all 0.25s;
            }
            .flex-item:hover {
              color: pink;
              background-color: ${colors.gray.l};
            }
            .flex-item:hover .marker h1 {
              color: pink;
            }
            .flex-item::after {
              content: "";
              background: pink;
              height: 3px;
              position: relative;
              top: 0.7rem;
              width: 0;
              transition: 0.25s;
            }
            .flex-item:hover::after {
              width: 15%;
            }
            .marker {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 50%;
            }
            .marker h1 {
              font-family: Lora;
              margin-top: 3rem;
              font-size: 4.5rem;
              font-weight: 300;
              color: ${colors.gray.xxd};
              transition: 0.25s;
            }
            .marker p {
              font-size: 2.5rem;
            }
            @media only screen and (max-width: 740px) {
              .flex-item {
                align-items: stretch;
              }
              .marker h1 {
                font-size: 3rem;
              }
              .marker p {
                font-size: 2rem;
                margin-bottom: 3rem;
              }
            }
          `}</style>
        </a>
      </Link>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{BY_SERENA_PAGE.page_title}</title>
      </Head>
      <div className="flex-container">
        {renderNavSection({
          path: "/by-serena__academia",
          num: "01.",
          title: "Academia",
        })}
        {renderNavSection({
          path: "/by-serena__projects",
          num: "02.",
          title: "Projects",
        })}
        {renderNavSection({
          path: "/by-serena__blog",
          num: "03.",
          title: "Blog",
        })}
      </div>
      <style jsx>
        {`
          .flex-container {
            display: flex;
            min-height: 90vh;
          }
          @media only screen and (max-width: 740px) {
            .flex-container {
              flex-direction: column;
              min-height: 0;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default BySerena;
