import { default as Grid } from '@mui/material/Unstable_Grid2'
import BlogCard from '../blog-card/BlogCard'

import type { singleBlogProps } from '@utils'

import type { ReactElement } from 'react'

type BlogGridProps = {
    blogs: singleBlogProps[]
}

const BlogGrid = ({ blogs }: BlogGridProps): ReactElement => {
    return (
        <>
            {blogs.map((post: singleBlogProps): ReactElement => {
                return (
                    <Grid xs={12} sm={6} md={4} key={post.id}>
                        <BlogCard blog={post} />
                    </Grid>
                )
            })}
        </>
    )
}

export default BlogGrid
