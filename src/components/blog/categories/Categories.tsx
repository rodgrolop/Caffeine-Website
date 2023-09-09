import { useState, useEffect } from "preact/compat";
import { Link as RouterLink } from "react-router-dom";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { ChipsSkelleton, NoResults, QueryError } from "@components";
import { useT } from "talkr";

import {
  categoriesResponseTransformer,
  useSanitizeLanguage,
  singleCategoryProps,
} from "@utils";

import type { VNode } from "preact";
import { styles } from "./styles";
import { useGetCategoriesQuery } from "@api";

type CategoriesProps = {
  pathname: string;
};

const Categories = ({ pathname }: CategoriesProps): VNode => {
  const { T } = useT();
  const { language } = useSanitizeLanguage();
  const [categories, setCategories] = useState<singleCategoryProps[] | null>(
    null
  );

  const { data, error, isFetching } = useGetCategoriesQuery({
    locale: language(),
  });

  useEffect(() => {
    if (data) {
      setCategories(categoriesResponseTransformer(data));
    }
  }, [data]);

  return (
    <Grid
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      sx={styles.categoriesContainer}
    >
      {isFetching ? <ChipsSkelleton /> : null}
      {error ? <QueryError message={T("errorCategories")} /> : null}
      {categories?.length && !isFetching && !error
        ? categories.map(
            (category: singleCategoryProps): VNode => (
              <Chip
                key={category.name}
                label={category.name}
                component={RouterLink}
                sx={{
                  backgroundColor: category.color,
                  ...styles.categoryChip,
                }}
                to={`${pathname}?categories=${category.slug}`}
                clickable
              />
            )
          )
        : null}
      {categories?.length === 0 && !isFetching && !error ? (
        <NoResults message={T("noResultsCategories")} />
      ) : null}
    </Grid>
  );
};

export default Categories;
