import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <Link href="/">
          <a>Serena Hsu</a>
        </Link>
      </div>
      <div className="navitems-wrapper">
        <ul className="navitems">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <a>Media</a>
            </Link>
          </li>
          <li>
            <Link href="/concerts">
              <a>Concerts</a>
            </Link>
          </li>
          <li>
            <Link href="/by-serena">
              <a>By Serena</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
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
            height: 80px;
            align-items: center;
          }

          .navbar .logo {
            font-style: none;
            margin: 0 45px;
          }

          .navbar .logo a {
            white-space: nowrap;
            padding: 1rem;
            font-size: 2.1rem;
          }

          .navitems-wrapper {
            font-style: italic;
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          .navbar .navitems {
            display: flex;
            justify-content: space-between;
            width: 850px;
            margin-right: 50px;
          }

          .navbar .navitems a {
            font-size: 1.4rem;
            padding: 0.5rem;
          }
        `}
      </style>
    </section>
  );
};

export default Navbar;
