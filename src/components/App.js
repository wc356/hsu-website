import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

const App = () => (
  <div className="document">
    <Head>
      <title>🎵Serena Hsu | Violist 🎻</title>
      <link rel="icon" href="#" />
    </Head>
    <Navbar />
    <div className="background"></div>

    <style jsx>
      {`
        .document {
          height: 100vh;
        }
        .document .background {
          background: url("/images/IMG_1385.jpg");
          background-size: cover;
          background-position: 0 100%;
          height: 100vh;
          width: 100vw;
        }
      `}
    </style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
         {
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif; */
        }
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default App;
