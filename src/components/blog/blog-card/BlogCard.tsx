import { useState } from 'react'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import ShareIcon from '@mui/icons-material/Share'
import { format } from 'date-fns'

import { getFNSLocale, sharePost, type singleBlogProps } from '@utils'

import type { MouseEvent, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'
import { LikeButton } from '@components'
import Stack from '@mui/material/Stack'

const useStyles = makeStyles(styles)

type BlogCardProps = {
    blog: singleBlogProps
}

const BlogCard = ({ blog }: BlogCardProps): ReactElement => {
    const {
        id,
        Title,
        Excerpt,
        updatedAt,
        Hero,
        likes_count,
        Slug,
        Categories,
    } = blog
    const [elevation, setElevation] = useState<number>(3)
    const classes = useStyles()

    return (
        <Link to={`/blog/${Slug}`} className={classes.cardLink}>
            <Card
                onMouseEnter={() => setElevation(6)}
                onMouseLeave={() => setElevation(3)}
                elevation={elevation}
            >
                <CardHeader
                    title={<Typography variant="body1">{Title}</Typography>}
                    subheader={
                        <Typography variant="caption" color="text.secondary">
                            {format(new Date(updatedAt), 'PPP', {
                                locale: getFNSLocale(),
                            })}
                        </Typography>
                    }
                    disableTypography
                />
                <CardMedia
                    component="img"
                    alt={Title}
                    sx={{
                        height: 240,
                        backgroundImage: `url(${Hero.placeholder})`,
                        backgroundBlendMode: 'lighten',
                    }}
                    loading="lazy"
                    image={Hero.url}
                    title={Title}
                />
                <CardContent>
                    <Typography variant="caption" color="text.secondary">
                        {Excerpt}
                    </Typography>
                </CardContent>
                <CardActions>
                    {Categories.map((category) => (
                        <Chip
                            key={category.name}
                            label={category.name}
                            sx={{
                                color: 'white',
                                backgroundColor: category.color,
                            }}
                        />
                    ))}
                    <div style={{ flexGrow: 1 }} />
                    <Stack direction="row">
                        <LikeButton blogId={id} likes_count={likes_count} />
                        <IconButton
                            aria-label="share"
                            onClick={(
                                event: MouseEvent<HTMLButtonElement>
                            ): void => sharePost(event, blog)}
                        >
                            <ShareIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
        </Link>
    )
}

export default BlogCard
