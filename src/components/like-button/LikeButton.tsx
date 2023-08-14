import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import type { MouseEvent, ReactElement } from 'react'
import { userAtom } from '@atoms'
import { useRecoilState } from 'recoil'
import { useMutation } from '@apollo/client'
import { BLOG_LIKE_MUTATION } from '@mutations'

type LikeIconProps = {
    blogId: string
    likes_count: number
}

// TODO - finish like blog feat

const LikeButton = (props: LikeIconProps): ReactElement | null => {
    const { blogId } = props
    const [user, setUser] = useRecoilState(userAtom)
    const likedByUser = user?.user.id && user.user.blog_likes.includes(blogId)

    const [likeMutation] = useMutation(BLOG_LIKE_MUTATION)

    const likeUnlike = (newLikesArray: string[]) => {
        likeMutation({
            variables: {
                id: user?.user.id,
                data: { blog_likes: newLikesArray },
            },
        })
            .then(({ data }) => {
                const newLikesArray =
                    data.updateUsersPermissionsUser.data.attributes.blog_likes.data.map(
                        (blog_like: { id: string }): string => blog_like.id
                    )
                user &&
                    setUser({
                        ...user,
                        user: { ...user.user, blog_likes: newLikesArray },
                    })
            })
            .catch((errors) => {
                console.error(errors)
            })
    }

    const likeClick = (event: MouseEvent<HTMLElement>): void => {
        event.preventDefault()
        if (likedByUser && user?.user.id) {
            const newLikesArray = user.user.blog_likes.filter(
                (id: string): boolean => id !== blogId
            )
            likeUnlike(newLikesArray)
        } else if (!likedByUser && user?.user.id) {
            const newLikesArray = [...user.user.blog_likes, blogId]
            likeUnlike(newLikesArray)
        }
    }

    return user?.authenticated ? (
        <IconButton
            aria-label="add to favorites"
            onClick={(event: MouseEvent<HTMLElement>): void => likeClick(event)}
        >
            {likedByUser ? (
                <FavoriteIcon color="secondary" />
            ) : (
                <FavoriteBorderOutlinedIcon color="secondary" />
            )}
        </IconButton>
    ) : null
}

export default LikeButton
