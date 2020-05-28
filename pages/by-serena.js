import React from "react";
import Link from "next/link";

import Layout from "../src/components/00_template/Layout";

import colors from "../styles/theme";

const BySerena = () => (
  <Layout>
    <div className="flex-container">
      <Link href="#">
        <section className="flex-item">
          <div className="marker">
            <h1>01.</h1>
            <a>Journal</a>
          </div>
        </section>
      </Link>
      <Link href="#">
        <section className="flex-item">
          <div className="marker">
            <h1>02.</h1>
            <a>Projects</a>
          </div>
        </section>
      </Link>
      <Link href="/by-serena__blog">
        <section className="flex-item">
          <div className="marker">
            <h1>03.</h1>
            <a>Blog</a>
          </div>
        </section>
      </Link>
    </div>

    <style jsx>
      {`
        .flex-container {
          display: flex;
          height: 90vh;
        }

        .flex-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          cursor: pointer;
          transition: all 0.25s;
        }
        .flex-item .marker {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 50%;
        }
        .flex-item .marker h1 {
          font-family: Lora;
          padding-top: 3rem;
          font-size: 4.5rem;
          font-weight: 300;
          color: ${colors.gray.xxd};
          transition: 0.25s;
        }
        .flex-item .marker a {
          font-size: 2.5rem;
        }
        .flex-item:hover {
          color: pink;
          background-color: #fff;
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
      `}
    </style>
  </Layout>
);

export default BySerena;
