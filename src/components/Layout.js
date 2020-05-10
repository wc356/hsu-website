import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Navbar />
      <>{props.children}</>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Montserrat:wght@300;400;500;600;700&display=swap");

        html,
        body {
          font-family: "Lora", serif;
          height: 100%;
          text-align: justify;
        }

        h1,
        h3 {
          font-family: "Montserrat", sans-serif;
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
