import { Suspense, lazy, useContext, useEffect, useState } from "preact/compat";
import { useLocation } from "wouter-preact";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { BlogListSkelleton } from "@components";

import {
  blogListResponseTransformer,
  blogMetaTransformer,
  type metaProps,
  useSanitizeLanguage,
  type singleBlogProps,
} from "@utils";

import type { VNode } from "preact";

import BlogGrid from "../blog-grid/BlogGrid";
import Categories from "../categories/Categories";
import Pagination from "../pagination/Pagination";
import { useT } from "talkr";
import { useGetBlogsQuery } from "@api";
import { UserContext } from "@context";

const NoResultsWithIcon = lazy(
  () => import("./../../no-results/NoResultsWithIcon")
);
const QueryErrorWithIcon = lazy(
  () => import("./../../error/QueryErrorWithIcon")
);

type BlogListProps = {
  pageSize?: number;
  categories?: boolean;
  pagination?: boolean;
};

const BlogList = ({
  pageSize = 3,
  categories = false,
  pagination = false,
}: BlogListProps): VNode => {
  const user = useContext(UserContext);
  const { T } = useT();
  const { language } = useSanitizeLanguage();
  const [location] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const [blogEntries, setBlogEntries] = useState<singleBlogProps[] | null>(
    null
  );
  const [meta, setMeta] = useState<metaProps | null>(null);
  const page = parseInt(params.get("page") ?? "1");
  const categoriesParam = params.get("categories") ?? "";

  const { data, error, isFetching } = useGetBlogsQuery({
    pagination: {
      page,
      pageSize,
    },
    filters:
      categoriesParam !== "" && categoriesParam !== "all"
        ? { Categories: { Slug: { eq: categoriesParam } } }
        : null,
    locale: language(),
  });

  useEffect(() => {
    if (data) {
      setBlogEntries(blogListResponseTransformer(data));
      setMeta(blogMetaTransformer(data));
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "448px" }}
    >
      {categories && <Categories pathname={location} />}
      {isFetching ? <BlogListSkelleton amount={3} /> : null}
      <Suspense fallback={null}>
        {error ? <QueryErrorWithIcon message={T("errorBlogs")} /> : null}
      </Suspense>
      {blogEntries?.length && !isFetching && !error ? (
        <BlogGrid blogs={blogEntries} user={user} />
      ) : null}
      <Suspense fallback={null}>
        {blogEntries?.length === 0 && !isFetching && !error ? (
          <NoResultsWithIcon message={T("noResultsBlogs")} />
        ) : null}
      </Suspense>
      {pagination && meta?.pageCount ? (
        <Pagination meta={meta} pathname={location} />
      ) : null}
    </Grid>
  );
};

export default BlogList;
