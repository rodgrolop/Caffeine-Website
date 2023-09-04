import { useQuery } from "@tanstack/react-query";
import { getCategoriesQuery } from "../queries/blog-categories-query";
import type { categoriesResponseProps } from "@utils";
import type { CategoriesQueryInputProps } from "./useCategoriesRequestsProps";

export const useGetCategoriesQuery = (variables: CategoriesQueryInputProps) => {
  const { data, error, isFetching } = useQuery<
    unknown,
    any,
    categoriesResponseProps
  >({
    queryKey: ["get-categories", variables],
    queryFn: () => getCategoriesQuery(variables),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  return { data, error, isFetching };
};
