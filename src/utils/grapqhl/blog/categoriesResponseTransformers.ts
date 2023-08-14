import {
    categoriesResponseProps,
    singleCategoryProps,
    singleCategoryResponseProps,
} from './categoriesResponseProps'

export const categoriesResponseTransformer = (
    categoriesResponse: categoriesResponseProps
): singleCategoryProps[] =>
    categoriesResponse.categories.data
        .filter(
            (category: singleCategoryResponseProps): boolean =>
                category.attributes.Blogs.data.length > 0
        )
        .map((category: singleCategoryResponseProps): singleCategoryProps => {
            const { Color, Name, Slug } = category.attributes
            return {
                id: category.id,
                color: Color,
                name: Name,
                slug: Slug,
            }
        })
