import React from "react";

import colors from "../../../styles/theme";

const Header = () => (
  <section className="title">
    <div className="card">
      <h1>Featured Videos</h1>
      <h3>
        <a href="">View All Media</a>
      </h3>
    </div>
    <div className="card" />

    <style jsx>
      {`
        .title {
          display: flex;
          justify-content: space-evenly;
        }

        .title .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 560px;
          padding: 5rem 0;
        }

        .title .card h1 {
          color: ${colors.black.l};
          font-size: 3rem;
          font-weight: 300;
        }

        .title .card h3 {
          margin-top: 1rem;
        }

        .title .card a {
          display: inline-block;
          font-weight: 500;
          color: white;
          background: #ffa7b6;
          padding: 1rem;
          border-radius: 0.9rem;
          transition: all 0.15s;
        }

        .title .card a:hover {
          background: #ff748c;
          transform: translateY(-5px);
        }

        @media screen and (max-width: 960px) {
          .title {
            flex-direction: column;
            align-items: center;
          }
          .title .card {
            text-align: center;
            padding: 0;
            margin: 2rem 0;
          }
          .title .card h1 {
            font-size: 2rem;
          }
          .title .card h3 {
            margin-top: 0.5rem;
          }
        }

        @media screen and (max-width: 560px) {
          .title {
            align-item: left;
          }
        }
      `}
    </style>
  </section>
);

export default Header;
