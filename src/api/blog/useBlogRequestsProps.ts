export type BlogsQueryInputProps = {
  pagination: {
    page: number;
    pageSize: number;
  };
  filters: { Categories: { Slug: { eq: string } } } | null;
  locale: string;
};

export type SingleBlogQueryInputProps = {
  pagination: {
    page: number;
    pageSize: number;
  };
  filters: { Slug: { eq?: string } };
};
