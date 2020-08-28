import React from "react";
import Head from "next/head";

import Layout from "../src/components/00_template/Layout";
import LandingImage from "../src/components/01_home/LandingImage";
import About from "../src/components/01_home/About";
import ConcertsSchedule from "../src/components/01_home/ConcertsSchedule";
import Gallery from "../src/components/01_home/Gallery";
import ContactMe from "../src/components/01_home/ContactMe";

import { HOME_PAGE } from "../src/database/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{HOME_PAGE.page_title}</title>
      </Head>
      <LandingImage />
      <About />
      <ConcertsSchedule />
      <Gallery />
      <ContactMe />
    </Layout>
  );
}
