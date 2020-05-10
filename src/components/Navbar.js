import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleLines = `
    
  `;

  return (
    <section className="navbar">
      <div className="logo">
        <Link href="/">
          <a>SERENA HSU</a>
        </Link>
      </div>
      <div className="navitems-wrapper">
        <ul className="navitems">
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <a>media</a>
            </Link>
          </li>
          <li>
            <Link href="/concerts">
              <a>concerts</a>
            </Link>
          </li>
          <li>
            <Link href="/by-serena">
              <a>by Serena</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>gallery</a>
            </Link>
          </li>
        </ul>
        <div className="burger toggle" onClick={() => setNavActive(!navActive)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
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
            min-height: 8vh;
            align-items: center;
          }

          .navbar .logo {
            margin: 0 45px;
          }

          .navbar .logo a {
            font-family: Montserrat;
            white-space: nowrap;
            padding: 1rem;
            font-size: 2rem;
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

          .navbar .navitems a {
            font-size: 1.4rem;
            padding: 0.5rem;
            white-space: nowrap;
          }

          .burger {
            display: none;
          }

          .burger div {
            width: 25px;
            height: 2px;
            margin: 5px;
            background-color: black;
          }

          .toggle .line1 {
            transform: ${navActive && `rotate(-45deg) translate(-4px, 6px)`};
          }

          .toggle .line2 {
            opacity: ${navActive && `0`};
          }

          .toggle .line3 {
            transform: ${navActive && `rotate(45deg) translate(-4px, -6px)`};
          }

          @media screen and (max-width: 1400px) {
            .navbar .navitems {
              width: 100%;
            }

            .navbar .navitems a {
              font-size: 1.2rem;
            }
          }

          @media screen and (max-width: 960px) {
            body {
              overflow-x: hidden;
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

          @keyframes navLinkFade {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Navbar;
