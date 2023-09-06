import { default as Grid } from "@mui/material/Unstable_Grid2";
import BlogCard from "../blog-card/BlogCard";

import type { singleBlogProps } from "@utils";
import type { VNode } from "preact";
import type { userProps } from "@context";

type BlogGridProps = {
  blogs: singleBlogProps[];
  user: userProps | null;
};

const BlogGrid = ({ blogs, user }: BlogGridProps): VNode => (
  <>
    {blogs.map(
      (post: singleBlogProps): VNode => (
        <Grid xs={12} sm={6} md={4} key={post.id}>
          <BlogCard
            blog={post}
            userData={
              user
                ? { id: user.user.id, blog_likes: user.user.blog_likes }
                : null
            }
            isAuth={!!user?.authenticated}
          />
        </Grid>
      )
    )}
  </>
);

export default BlogGrid;
