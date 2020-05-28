import React from "react";

import { blogAuthor } from "../../../database/05_by-serena/blog/index";

const BlogImage = () => (
  <section className="image">
    {/* <img src="/images/IMG_1385.jpg" alt="#" /> */}
    <img src={blogAuthor.pic} alt={blogAuthor} />

    <style jsx>
      {`
        .image {
          width: 80%;
          height: 100%;
        }

        .image img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}
    </style>
  </section>
);

export default BlogImage;
