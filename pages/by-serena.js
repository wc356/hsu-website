import React from "react";

import Layout from "../src/components/00_template/Layout";
import BlogImage from "../src/components/05_by-serena/blog/BlogImage";
import BlogBody from "../src/components/05_by-serena/blog/BlogBody";

const BySerena = () => (
  <Layout>
    <div className="flex-container">
      <BlogImage />
      <BlogBody />
      <section className="related-posts"></section>
    </div>

    <style jsx>
      {`
        .flex-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
  </Layout>
);

export default BySerena;
