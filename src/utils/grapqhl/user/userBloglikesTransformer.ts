import { blogLikesResponse } from './blogResponseProps'

export const userBloglikesTransformer = (
    blogLikes: blogLikesResponse
): string[] =>
    blogLikes.data.map((blogLike: { id: string }): string => {
        return blogLike.id
    })
