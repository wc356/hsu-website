import React from "react";
import { useRouter } from "next/router";

import Blog from "../../src/components/05_by-serena/blog/Blog";

const BlogPost = () => {
  const router = useRouter();
  const title = router.query.blog;

  return <Blog title={title} />;
};

export default BlogPost;
