import { gql } from '@apollo/client'

export const GET_BLOGS = gql`
    query blogsQuery(
        $filters: BlogFiltersInput
        $pagination: PaginationArg
        $sort: [String] = ["updatedAt:desc"]
        $publicationState: PublicationState = LIVE
        $locale: I18NLocaleCode = "en"
    ) {
        blogs(
            filters: $filters
            pagination: $pagination
            sort: $sort
            publicationState: $publicationState
            locale: $locale
        ) {
            data {
                id
                attributes {
                    Title
                    Excerpt
                    Hero {
                        data {
                            attributes {
                                name
                                alternativeText
                                url
                                width
                                height
                                formats
                                placeholder
                            }
                        }
                    }
                    Categories {
                        data {
                            attributes {
                                Name
                                Color
                            }
                        }
                    }
                    Author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    Slug
                    users_likes {
                        data {
                            id
                        }
                    }
                    updatedAt
                }
            }
            meta {
                pagination {
                    total
                    page
                    pageSize
                    pageCount
                }
            }
        }
    }
`

export const GET_SINGLE_BLOG = gql`
    query blogsQuery(
        $filters: BlogFiltersInput
        $publicationState: PublicationState = LIVE
        $locale: I18NLocaleCode = "all"
    ) {
        blogs(
            filters: $filters
            publicationState: $publicationState
            locale: $locale
        ) {
            data {
                id
                attributes {
                    Title
                    Excerpt
                    Content
                    Hero {
                        data {
                            attributes {
                                name
                                alternativeText
                                url
                                width
                                height
                                formats
                                placeholder
                            }
                        }
                    }
                    Categories {
                        data {
                            attributes {
                                Name
                                Color
                            }
                        }
                    }
                    Author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    Slug
                    updatedAt
                    users_likes {
                        data {
                            id
                        }
                    }
                    localizations {
                        data {
                            attributes {
                                Slug
                                locale
                            }
                        }
                    }
                }
            }
        }
    }
`
