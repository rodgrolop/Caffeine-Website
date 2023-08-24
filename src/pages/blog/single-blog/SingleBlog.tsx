import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_SINGLE_BLOG } from '@queries'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ShareIcon from '@mui/icons-material/Share'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import Chip from '@mui/material/Chip'
import { styles } from './styles'
import {
    PageContainer,
    NoResultsWithIcon,
    LikeButton,
    SingleBlogSkelleton,
} from '@components'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'

import {
    getFNSLocale,
    blogSingleResponseTransformer,
    sharePost,
    type singleItemBlogProps,
} from '@utils'

import type { ReactElement, MouseEvent } from 'react'

const SingleBlog = (): ReactElement => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const { blogSlug } = useParams()
    const [blogEntry, setBlogEntry] = useState<singleItemBlogProps | null>(null)

    const [getSingleBlog, { loading, error, data }] = useLazyQuery(
        GET_SINGLE_BLOG,
        {
            variables: {
                filters: { Slug: { eq: blogSlug } },
                pagination: {
                    page: 1,
                    pageSize: 1,
                },
            },
        }
    )

    useEffect(() => {
        const langSlug = blogEntry?.localizations?.find(
            (locale: any): any => locale.locale === i18n.language
        )?.Slug
        langSlug && navigate(`/blog/${langSlug}`)
    }, [blogEntry?.localizations, i18n.language, navigate])

    useEffect(() => {
        data && setBlogEntry(blogSingleResponseTransformer(data))
    }, [data])

    useEffect(() => {
        getSingleBlog()
    }, [getSingleBlog])

    return (
        <PageContainer>
            {blogEntry && (
                <>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        {blogEntry.Title}
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 500,
                        }}
                    >
                        {blogEntry.Excerpt}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{ marginBottom: 2 }}
                    >
                        <Grid>
                            <Typography variant="body1" fontSize={'small'}>
                                {format(new Date(blogEntry.updatedAt), 'PPP', {
                                    locale: getFNSLocale(),
                                })}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                fontSize={'small'}
                                sx={{
                                    marginRight: '0.5rem',
                                    marginLeft: '0.5rem',
                                }}
                            >
                                |
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" fontSize={'small'}>
                                {blogEntry.Author}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{ marginBottom: 2 }}
                    >
                        {blogEntry.Categories.map(
                            (category: { name: string; color: string }) => (
                                <Chip
                                    key={category.name}
                                    label={category.name}
                                    sx={{
                                        color: 'white',
                                        backgroundColor: category.color,
                                    }}
                                />
                            )
                        )}
                        <div style={{ flexGrow: 1 }} />
                        <LikeButton
                            blogId={blogEntry.id}
                            likes_count={blogEntry.likes_count}
                        />
                        <IconButton
                            aria-label="share"
                            onClick={(
                                event: MouseEvent<HTMLButtonElement>
                            ): void => sharePost(event, blogEntry)}
                        >
                            <ShareIcon />
                        </IconButton>
                    </Grid>
                    <img
                        src={blogEntry.Hero.url}
                        alt={blogEntry.Title}
                        style={styles.blogMainImage}
                    />
                    {blogEntry.Content && (
                        <div style={styles.markdownContent}>
                            <ReactMarkdown
                                children={blogEntry.Content}
                                components={{
                                    pre: ({ node, ...props }) => (
                                        <pre
                                            style={styles.markdownContentPre}
                                            {...props}
                                        />
                                    ),
                                    code: ({ node, ...props }) => (
                                        <code
                                            style={styles.markdownContentCode}
                                            {...props}
                                        />
                                    ),
                                }}
                            />
                        </div>
                    )}
                </>
            )}
            {loading && <SingleBlogSkelleton />}
            {error && <NoResultsWithIcon message={t('errorBlog')} />}
        </PageContainer>
    )
}

export default SingleBlog
