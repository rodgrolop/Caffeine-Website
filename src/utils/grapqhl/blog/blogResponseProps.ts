// List Blog Props
export type singleBlogResponseProps = {
    id: string
    attributes: {
        Title: string
        Excerpt: string
        Hero: {
            data: {
                attributes: {
                    name: string | null
                    alternativeText: string | null
                    width: number
                    height: number
                    placeholder: string
                    formats: {
                        small: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: null
                            size: number
                            width: number
                            height: number
                        }
                    }
                }
            }
        }
        users_likes: {
            data: {
                id: string
            }[]
        }
        Slug: string
        Author?: {
            data: {
                attributes: {
                    username: string
                }
            }
        }
        Categories: {
            data: {
                attributes: {
                    Name: string
                    Color: string
                }
            }[]
        }
        updatedAt: string
    }
}

export type singleBlogProps = {
    id: string
    Title: string
    Excerpt: string
    Hero: {
        url: string
        name: string | null
        alternativeText: string | null
        width: number
        height: number
        placeholder: string
    }
    Slug: string
    Categories: { name: string; color: string }[]
    Author?: string
    users_likes: string[]
    likes_count: number
    updatedAt: string
}

export type blogsResponseProps = {
    blogs: {
        data: singleBlogResponseProps[]
        meta: {
            pagination: {
                total: number
                page: number
                pageSize: number
                pageCount: number
            }
        }
    }
}

export type blogsProps = {
    blogPosts: singleBlogProps[]
}

export type metaProps = {
    page: number
    pageCount: number
}

// Single Blog Props
export type singleItemBlogResponseProps = {
    id: string
    attributes: {
        Title: string
        Excerpt: string
        Content: string
        Hero: {
            data: {
                attributes: {
                    name: string
                    alternativeText: string
                    width: number
                    height: number
                    url: string
                    placeholder: string
                    formats: {
                        small: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: null
                            size: number
                            width: number
                            height: number
                        }
                        medium: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: null
                            size: number
                            width: number
                            height: number
                        }
                        thumbnail: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: null
                            size: number
                            width: number
                            height: number
                        }
                    }
                }
            }
        }
        Slug: string
        Categories: {
            data: {
                attributes: {
                    Name: string
                    Color: string
                }
            }[]
        }
        Author: {
            data: {
                attributes: {
                    username: string
                }
            }
        }
        users_likes: {
            data: {
                id: string
            }[]
        }
        updatedAt: string
        localizations: {
            data: {
                attributes: {
                    Slug: string
                    locale: string
                }
            }[]
        }
    }
}

export type singleItemBlogProps = {
    id: string
    Title: string
    Excerpt: string
    Content: string
    Hero: {
        url: string
        name: string | null
        alternativeText: string | null
        width: number
        height: number
        placeholder: string
    }
    Slug: string
    Categories: { name: string; color: string }[]
    Author: string
    updatedAt: string
    users_likes: string[]
    likes_count: number
    localizations: {
        Slug: string
        locale: string
    }[]
}

export type blogsItemResponseProps = {
    blogs: {
        data: singleItemBlogResponseProps[]
        meta: {
            pagination: {
                total: number
                page: number
                pageSize: number
                pageCount: number
            }
        }
    }
}
