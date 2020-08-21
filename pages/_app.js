// Libraries
import React, { Fragment } from "react";
import Head from "next/head";
// Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ServerApp = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-163343549-2"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-163343549-2');
        `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default ServerApp;
