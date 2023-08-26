import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { userAtom } from "@atoms";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";
import { BLOG_LIKE_MUTATION } from "@mutations";

import type { h, VNode } from "preact";

type LikeIconProps = {
  blogId: string;
  likes_count: number;
};

const LikeButton = (props: LikeIconProps): VNode | null => {
  const { blogId } = props;
  const [user, setUser] = useRecoilState(userAtom);
  const likedByUser = user?.user.id && user.user.blog_likes.includes(blogId);

  const [likeMutation] = useMutation(BLOG_LIKE_MUTATION);

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
          );
        user &&
          setUser({
            ...user,
            user: { ...user.user, blog_likes: newLikesArray },
          });
      })
      .catch((errors) => {
        console.error(errors);
      });
  };

  const likeClick = (event: h.JSX.TargetedEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (likedByUser && user?.user.id) {
      const newLikesArray = user.user.blog_likes.filter(
        (id: string): boolean => id !== blogId
      );
      likeUnlike(newLikesArray);
    } else if (!likedByUser && user?.user.id) {
      const newLikesArray = [...user.user.blog_likes, blogId];
      likeUnlike(newLikesArray);
    }
  };

  return user?.authenticated ? (
    <IconButton
      aria-label="add to favorites"
      onClick={(event: h.JSX.TargetedEvent<HTMLInputElement>): void =>
        likeClick(event)
      }
    >
      {likedByUser ? (
        <FavoriteIcon color="secondary" />
      ) : (
        <FavoriteBorderOutlinedIcon color="secondary" />
      )}
    </IconButton>
  ) : null;
};

export default LikeButton;
