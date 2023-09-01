import { useMutation } from "@tanstack/react-query";
import { blogLikeMutation } from "../mutations/blog-like-mutation";
import type { blogLikeRequestInputProps } from "./useBlogLikeRequestProps";

export const useBlogLike = () => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (blogLikeInput: blogLikeRequestInputProps) =>
      blogLikeMutation(blogLikeInput),
  });

  return { mutate, data, error, isLoading };
};
