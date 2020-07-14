import React, { useState } from "react";
import Link from "next/link";

import colors from "../../../styles/theme";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const renderNavLink = (path, title) => (
    <li>
      <Link href={`/${path}`}>
        <a>{title}</a>
      </Link>
      <style jsx>
        {`
          a {
            color: ${colors.black.l};
            display: inline-block;
            position: relative;
            transition: all 0.15s;
            font-size: 1.2rem;
            padding: 0.5rem;
            white-space: nowrap;
          }
          a:hover {
            transform: translateY(-3px);
          }
          a::after {
            position: absolute;
            height: 2px;
            width: 0%;
            margin: 0 auto;
            left: 0;
            right: 0;
            background: pink;
            content: "";
            bottom: 0;
            /* animation */
            -o-transition: 0.15s;
            -ms-transition: 0.15s;
            -moz-transition: 0.15s;
            -webkit-transition: 0.15s;
            transition: 0.15s;
          }
          a:hover::after {
            width: 70%;
            background: #ff748c;
          }
        `}
      </style>
    </li>
  );
  const renderNavBurger = () => (
    <>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
      <style jsx>
        {`
          div {
            width: 25px;
            height: 2px;
            margin: 5px;
            background-color: black;
            transition: all 0.25s;
          }
          .line1 {
            transform: ${navActive && `rotate(-45deg) translate(-4px, 6px)`};
          }
          .line2 {
            opacity: ${navActive && `0`};
          }
          .line3 {
            transform: ${navActive && `rotate(45deg) translate(-4px, -6px)`};
          }
        `}
      </style>
    </>
  );

  return (
    <section className="navbar">
      <div className="logo">
        <Link href="/">
          <a>SERENA HSU</a>
        </Link>
      </div>
      <div className="navitems-wrapper">
        <ul className="navitems">
          {renderNavLink("about", "about")}
          {renderNavLink("media", "media")}
          {renderNavLink("concerts", "concerts")}
          {renderNavLink("by-serena", "by Serena")}
          {renderNavLink("gallery", "gallery")}
        </ul>
        <div className="burger" onClick={() => setNavActive(!navActive)}>
          {renderNavBurger()}
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            z-index: 1;
            display: flex;
            position: sticky;
            top: 0;
            width: 100vw;
            background: white;
            font-family: "Roboto", sans-serif;
            height: 6rem;
            align-items: center;
          }
          .navbar .logo {
            margin: 0 45px;
          }
          .navbar .logo a {
            font-family: Montserrat;
            white-space: nowrap;
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 2px;
            color: brown;
          }
          .navitems-wrapper {
            font-family: Montserrat;
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }
          .navbar .navitems {
            display: flex;
            justify-content: space-around;
            width: 60%;
            margin-right: 50px;
          }
          .burger {
            display: none;
            margin-right: 1.5rem;
          }
          @media screen and (max-width: 1400px) {
            .navbar .navitems {
              width: 100%;
            }
          }
          @media screen and (max-width: 960px) {
            body {
              overflow-x: hidden;
            }
            .navbar .logo {
              margin: 0;
            }
            .navbar .navitems {
              position: fixed;
              margin-right: 0;
              right: 0;
              height: 92vh;
              top: 8vh;
              background-color: white;
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 50%;
              transform: ${navActive ? "translateX(0%)" : "translateX(100%)"};
              transition: transform 0.5s;
            }
            .burger {
              display: block;
              cursor: pointer;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Navbar;
