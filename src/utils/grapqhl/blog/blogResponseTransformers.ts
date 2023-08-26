import type {
  blogsResponseProps,
  singleBlogResponseProps,
  singleBlogProps,
  metaProps,
  singleItemBlogResponseProps,
  blogsItemResponseProps,
  singleItemBlogProps,
} from "./blogResponseProps";

export const blogListResponseTransformer = (
  postResponse: blogsResponseProps
): singleBlogProps[] =>
  postResponse.blogs.data.map(
    (post: singleBlogResponseProps): singleBlogProps => {
      const {
        Title,
        Excerpt,
        Hero,
        Categories,
        Slug,
        users_likes,
        updatedAt,
        Author,
      } = post.attributes;
      return {
        id: post.id,
        Title,
        Excerpt,
        Hero: {
          url: Hero.data.attributes.formats.small.url,
          alternativeText: Hero.data.attributes.alternativeText,
          name: Hero.data.attributes.name,
          width: Hero.data.attributes.formats.small.width,
          height: Hero.data.attributes.formats.small.height,
          placeholder: Hero.data.attributes.placeholder,
        },
        Categories: Categories.data.map((category: any) => {
          return {
            name: category.attributes.Name,
            color: category.attributes.Color,
          };
        }),
        Author: Author?.data.attributes.username,
        Slug,
        users_likes: users_likes.data.map(
          (user: { id: string }): string => user.id
        ),
        likes_count: users_likes.data.length,
        updatedAt,
      };
    }
  );

export const blogSingleResponseTransformer = (
  postResponse: blogsItemResponseProps
): singleItemBlogProps =>
  postResponse.blogs.data.map(
    (post: singleItemBlogResponseProps): singleItemBlogProps => {
      const {
        Title,
        Excerpt,
        Content,
        Hero,
        Categories,
        Slug,
        updatedAt,
        localizations,
        Author,
        users_likes,
      } = post.attributes;
      return {
        id: post.id,
        Title,
        Excerpt,
        Content,
        Hero: {
          url: Hero.data.attributes.url,
          alternativeText: Hero.data.attributes.alternativeText,
          name: Hero.data.attributes.name,
          width: Hero.data.attributes.width,
          height: Hero.data.attributes.height,
          placeholder: Hero.data.attributes.placeholder,
        },
        Categories: Categories.data.map((category: any) => {
          return {
            name: category.attributes.Name,
            color: category.attributes.Color,
          };
        }),
        Author: Author.data.attributes.username,
        Slug,
        updatedAt,
        users_likes: users_likes.data.map(
          (user: { id: string }): string => user.id
        ),
        likes_count: users_likes.data.length,
        localizations: localizations.data.map((localization) => {
          return {
            Slug: localization.attributes.Slug,
            locale: localization.attributes.locale,
          };
        }),
      };
    }
  )[0] ?? null;

export const blogMetaTransformer = (
  postResponse: blogsResponseProps
): metaProps => {
  const { page, pageCount } = postResponse.blogs.meta.pagination;
  return {
    page,
    pageCount,
  };
};
