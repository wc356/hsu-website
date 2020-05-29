import React from "react";
import Link from "next/link";

import Layout from "../src/components/00_template/Layout";
import BlogImage from "../src/components/05_by-serena/blog/BlogImage";
import BlogBody from "../src/components/05_by-serena/blog/BlogBody";

import { blogAuthor } from "../src/database/05_by-serena/blog/index";

const Blog = () => {
  const BlogLandingPost = () => (
    <div className="flex-container">
      <Link href="#">
        <a className="post">Same</a>
      </Link>

      <style jsx>
        {`
          .flex-container {
            display: flex;
            padding: 1rem;
          }

          .post {
            width: 18rem;
            height: 16rem;
            background: pink;
          }
        `}
      </style>
    </div>
  );

  const BlogBottomPosts = () => <div>Hello</div>;
  const BlogRightPosts = () => <div>Hello</div>;

  return (
    <Layout>
      <div className="flex-container">
        <section className="col-1">
          <BlogLandingPost />
          <BlogBottomPosts />
        </section>
        <section className="col-2">
          <BlogRightPosts />
        </section>
      </div>

      <style jsx>
        {`
          .flex-container {
            display: flex;
            min-height: 90vh;
          }
          .flex-container col-1,
          .flex-container col-2 {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
