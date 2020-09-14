import React from "react";
import Head from "next/head";
import Layout from "../src/components/00_template/Layout";
import BlogPost from "../src/components/05_by-serena/blog/BlogPost";
import BackBtn from "../src/components/00_template/BackBtn";
import { getSortedPostsData } from "../src/lib/posts";
import { BLOG_PAGE } from "../src/database/index";

export default function BySerenaBlog({ allPostsData }) {
  function renderBackBtn() {
    return (
      <div className="btn-container">
        <BackBtn href="/by-serena" />
        <style jsx>
          {`
            .btn-container {
              margin-right: 2rem;
              padding-top: 0.7rem;
            }
            @media only screen and (max-width: 900px) {
              .btn-container {
                margin-bottom: 2rem;
                width: 100%;
                margin-left: 2rem;
              }
            }
          `}
        </style>
      </div>
    );
  }

  function renderBlogPosts() {
    return allPostsData.map((blogPost) => <BlogPost blogPost={blogPost} />);
  }

  return (
    <Layout>
      <Head>
        <title>{BLOG_PAGE.page_title}</title>
      </Head>
      <div className="blog-landing-container">
        {renderBackBtn()}
        {renderBlogPosts()}
      </div>
      <style jsx>
        {`
          .blog-landing-container {
            padding: 3rem;
            display: flex;
            width: 100vw;
            min-height: calc(100vh - 6rem);
          }
          @media only screen and (max-width: 900px) {
            .blog-landing-container {
              flex-direction: column;
              align-items: center;
              padding: 1rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
