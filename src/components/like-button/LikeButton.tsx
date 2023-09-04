import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import type { h, VNode } from "preact";
import { blogLikeResponseProps, useBlogLike } from "@api";
import { useContext, useEffect } from "preact/hooks";
import { UserContext, UserContextSetter } from "@context";

type LikeIconProps = {
  blogId: string;
  likes_count: number;
};

const LikeButton = (props: LikeIconProps): VNode | null => {
  const { blogId } = props;
  const user = useContext(UserContext);
  const { setUser } = useContext(UserContextSetter);
  const { mutate, data } = useBlogLike();
  const likedByUser = user?.user.id && user.user.blog_likes.includes(blogId);

  const likeUnlike = (newLikesArray: string[]) => {
    mutate({
      id: user?.user.id,
      data: { blog_likes: newLikesArray },
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

  useEffect(() => {
    if (data) {
      const newLikesArray = (
        data as blogLikeResponseProps
      ).updateUsersPermissionsUser.data.attributes.blog_likes.data.map(
        (blog_like: { id: string }): string => blog_like.id
      );
      user &&
        setUser({
          ...user,
          user: { ...user.user, blog_likes: newLikesArray },
        });
    }
  }, [data]);

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
