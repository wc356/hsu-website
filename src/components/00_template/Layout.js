// Libraries
import React from "react";
// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Styles
import colors from "../../../styles/theme";

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
          font-family: "Lora", serif;
          height: 100%;
        }
        p {
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
      `}
    </style>
  </div>
);

export default Layout;
