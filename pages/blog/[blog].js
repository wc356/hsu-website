import React from "react";
import { useRouter } from "next/router";

import Layout from "../../src/components/00_template/Layout";
import Link from "next/link";
import BlogBody from "../../src/components/05_by-serena/blog/BlogBody";

export default ({ readTime }) => {
  const router = useRouter();

  const title = router.query.blog;
  console.log(router);

  return (
    <Layout>
      <div className="blog-container">
        <BlogBody title={title} readTime={readTime} />
      </div>
      <style jsx>{`
        .blog-container {
        }
      `}</style>
    </Layout>
  );
};
