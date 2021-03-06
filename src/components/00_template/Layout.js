// Libraries
import React from "react";
// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="layout">
    <Header />
    <Navbar />
    <>{props.children}</>
    <Footer />
    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Baskervville&family=Lora:wght@400;600&family=Montserrat:wght@300;400;500;600;700&display=swap");
        @font-face {
          font-family: "Dallastown";
          src: url("/fonts/Dallastown.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        html,
        body {
          height: 100%;
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
        a {
          text-decoration: none;
          color: black;
        }
      `}
    </style>
  </div>
);

export default Layout;
