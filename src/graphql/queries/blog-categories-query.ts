import { gql } from '@apollo/client'

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
`
