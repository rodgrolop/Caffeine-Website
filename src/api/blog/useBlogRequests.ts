import { useQuery } from "@tanstack/react-query";
import { getBlogsQuery, getSingleBlogQuery } from "../queries/blog-query";
import type {
  BlogsQueryInputProps,
  SingleBlogQueryInputProps,
} from "./useBlogRequestsProps";
import type { blogsItemResponseProps, blogsResponseProps } from "@utils";

export const useGetBlogsQuery = (variables: BlogsQueryInputProps) => {
  const { data, error, isFetching } = useQuery<
    unknown,
    any,
    blogsResponseProps
  >({
    queryKey: ["get-blogs", variables],
    queryFn: () => getBlogsQuery(variables),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  return { data, error, isFetching };
};

export const useGetSingleBlogQuery = (variables: SingleBlogQueryInputProps) => {
  const { data, error, isFetching } = useQuery<
    unknown,
    any,
    blogsItemResponseProps
  >({
    queryKey: ["get-blogs", variables],
    queryFn: () => getSingleBlogQuery(variables),
    keepPreviousData: true,
    staleTime: 60 * 60 * 1000,
  });

  return { data, error, isFetching };
};
