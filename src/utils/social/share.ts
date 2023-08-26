import { singleBlogProps } from "@utils";
import type { h } from "preact";

export const sharePost = (
  event: h.JSX.TargetedEvent<HTMLInputElement>,
  post: singleBlogProps
): void => {
  event.preventDefault();
  navigator.share({
    url: `/blog/${post.Slug}`,
    title: post.Title,
    text: post.Excerpt,
  });
};
