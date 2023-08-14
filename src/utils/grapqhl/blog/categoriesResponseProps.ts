export type singleCategoryResponseProps = {
    id: string
    attributes: {
        Color?: string
        Name: string
        Slug: string
        Blogs: {
            data: Array<{ id: string }>
        }
    }
}

export type categoriesResponseProps = {
    categories: {
        data: singleCategoryResponseProps[]
    }
}

export type singleCategoryProps = {
    id: string
    color?: string
    name: string
    slug: string
}
