import React, { Fragment, useState } from "react";
import Link from "next/link";
import colors from "../../../styles/theme";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  function renderLogo(path, logo) {
    return (
      <Fragment>
        <Link href={path}>
          <a>{logo}</a>
        </Link>
        <style jsx>
          {`
            a {
              font-family: Dallastown;
              white-space: nowrap;
              padding: 1rem;
              font-size: 3.75rem;
              font-weight: 600;
              letter-spacing: 2px;
              transition: all 0.15s;
              color: ${colors.gray.xxd};
            }
            a:hover {
              opacity: 0.5;
            }
            @media only screen and (max-width: 450px) {
              a {
                font-size: 11vw;
                padding-left: 1.5rem;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderNavLink(path, title) {
    return (
      <li>
        <Link href={path}>
          <a>{title}</a>
        </Link>
        <style jsx>
          {`
            a {
              color: ${colors.pink.d};
              display: inline-block;
              position: relative;
              transition: all 0.15s;
              font-size: 1.2rem;
              padding: 0.5rem;
              font-weight: 500;
              white-space: nowrap;
            }
            a:hover {
              transform: translateY(-2px);
              color: gray;
            }
          `}
        </style>
      </li>
    );
  }

  function renderNavBurger() {
    return (
      <Fragment>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
        <style jsx>
          {`
            div {
              width: 25px;
              height: 2px;
              margin: 5px;
              background-color: brown;
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
      </Fragment>
    );
  }

  return (
    <section className="navbar">
      <div className="logo">{renderLogo("/", "Serena Hsu")}</div>
      <div className="navitems-wrapper">
        <ul className="navitems">
          {renderNavLink("/about", "about")}
          {renderNavLink("/media", "media")}
          {renderNavLink("/studio", "studio")}
          {renderNavLink("/by-serena", "by Serena")}
          {renderNavLink("/gallery", "gallery")}
        </ul>
        <div className="burger" onClick={() => setNavActive(!navActive)}>
          {renderNavBurger()}
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            z-index: 2;
            display: flex;
            position: sticky;
            top: 0;
            width: 100vw;
            background: #fff;
            font-family: "Roboto", sans-serif;
            height: 6rem;
            align-items: center;
            box-shadow: 2px 2px 7px rgba(97, 97, 97, 0.2);
          }
          .logo {
            margin: 0 45px;
          }
          .navitems-wrapper {
            font-family: Montserrat;
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }
          .navitems {
            display: flex;
            justify-content: space-around;
            width: 60%;
            margin-right: 50px;
          }
          .burger {
            display: none;
            margin-right: 1.5rem;
          }
          @media only screen and (max-width: 450px) {
            .logo {
              margin: 0;
            }
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
            .logo {
              margin: 0;
            }
            .navitems {
              position: fixed;
              margin-right: 0;
              right: 0;
              height: 92vh;
              top: 8vh;
              background-color: #fff;
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
