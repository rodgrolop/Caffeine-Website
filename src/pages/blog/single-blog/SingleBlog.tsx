import { useEffect, useState } from "preact/compat";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import Markdown from "preact-markdown";

import {
  PageContainer,
  NoResultsWithIcon,
  LikeButton,
  SingleBlogSkelleton,
} from "@components";

import {
  customDateFormat,
  blogSingleResponseTransformer,
  sharePost,
  type singleItemBlogProps,
} from "@utils";

import type { VNode, h } from "preact";

import { styles } from "./styles";
import { useGetSingleBlogQuery } from "@api";

const SingleBlog = (): VNode => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { blogSlug } = useParams();
  const [blogEntry, setBlogEntry] = useState<singleItemBlogProps | null>(null);

  const { data, error, isFetching } = useGetSingleBlogQuery({
    filters: { Slug: { eq: blogSlug } },
    pagination: {
      page: 1,
      pageSize: 1,
    },
  });

  useEffect(() => {
    const langSlug = blogEntry?.localizations?.find(
      (locale: any): any => locale.locale === i18n.language
    )?.Slug;
    langSlug && navigate(`/blog/${langSlug}`);
  }, [blogEntry?.localizations, i18n.language, navigate]);

  useEffect(() => {
    if (data) {
      setBlogEntry(blogSingleResponseTransformer(data));
    }
  }, [data]);

  return (
    <PageContainer>
      <>
        {blogEntry ? (
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
                <Typography variant="body1" fontSize={"small"}>
                  {customDateFormat(blogEntry.updatedAt)}
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="body1"
                  fontSize={"small"}
                  sx={{
                    marginRight: "0.5rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  |
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="body1" fontSize={"small"}>
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
                      color: "white",
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
                onClick={(event: h.JSX.TargetedEvent<HTMLInputElement>): void =>
                  sharePost(event, blogEntry)
                }
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
                {Markdown(blogEntry.Content, {
                  markupOpts: {},
                  markedOpts: {},
                })}
              </div>
            )}
          </>
        ) : null}
        {isFetching ? <SingleBlogSkelleton /> : null}
        {error ? <NoResultsWithIcon message={t("errorBlog")} /> : null}
      </>
    </PageContainer>
  );
};

export default SingleBlog;
