export type blogLikeRequestInputProps = {
  id?: string;
  data: { blog_likes: string[] };
};

export type blogLikeResponseProps = {
  updateUsersPermissionsUser: {
    data: { attributes: { blog_likes: { data: { id: string }[] } } };
  };
};
