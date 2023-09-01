import { useQuery } from "@tanstack/react-query";
import { getCategoriesQuery } from "../queries/blog-categories-query";
import type { categoriesResponseProps } from "@utils";
import { CategoriesQueryInputProps } from "./useCategoriesRequestsProps";

export const useGetCategoriesQuery = (variables: CategoriesQueryInputProps) => {
  const { data, error, isFetching } = useQuery<
    unknown,
    any,
    categoriesResponseProps
  >({
    queryKey: ["get-categories", variables],
    queryFn: () => getCategoriesQuery(variables),
    keepPreviousData: true,
  });

  return { data, error, isFetching };
};
