import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Navbar />
      <>{props.children}</>

      <style jsx>
        {`
          .nav {
            position: relative;
            top: 0;
          }
        `}
      </style>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap");

        html,
        body {
          font-family: "Roboto", sans-serif;
          min-height: 100vh;
        }

        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: black;
        }

        a:visited {
          color: black;
        }
      `}</style>
    </>
  );
}
