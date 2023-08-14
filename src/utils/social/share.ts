import { singleBlogProps } from '@utils'
import type { MouseEvent } from 'react'

export const sharePost = (
    event: MouseEvent<HTMLButtonElement>,
    post: singleBlogProps
): void => {
    event.preventDefault()
    navigator.share({
        url: `/blog/${post.Slug}`,
        title: post.Title,
        text: post.Excerpt,
    })
}
