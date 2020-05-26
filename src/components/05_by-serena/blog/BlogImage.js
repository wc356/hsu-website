import React from "react";

const BlogImage = () => (
  <section className="image">
    <img src="/images/IMG_1385.jpg" alt="#" />

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
