import React from "react";

import Layout from "../src/components/00_template/Layout";
import Header from "../src/components/03_media/Header";
import VideoList from "../src/components/03_media/VideoList";

const Media = () => (
  <Layout>
    <div className="flex-container">
      <Header />
      <VideoList />
    </div>

    <style jsx>
      {`
        .flex-container {
          display: flex;
          flex-direction: column;
          padding: 0 2rem;
        }
      `}
    </style>
  </Layout>
);

export default Media;
