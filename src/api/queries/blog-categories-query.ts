import { gql } from "graphql-request";
import { graphQLClient } from "../client/reactQueryClient";

export const GET_BLOGS_CATEGORIES = gql`
  query categoriesQuery(
    $filters: CategoryFiltersInput = {}
    $pagination: PaginationArg
    $sort: [String] = ["updatedAt:desc"]
    $locale: I18NLocaleCode = "es"
  ) {
    categories(
      filters: $filters
      pagination: $pagination
      sort: $sort
      locale: $locale
    ) {
      data {
        id
        attributes {
          Name
          Color
          Slug
          Blogs {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const getCategoriesQuery = async (variables: any) =>
  await graphQLClient.request(GET_BLOGS_CATEGORIES, variables);
