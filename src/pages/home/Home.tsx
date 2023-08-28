import { default as Grid } from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { BlogList, HeroImage, PageContainer } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";

const Home = (): VNode => {
  const { t } = useTranslation();

  return (
    <>
      <HeroImage />
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            🚀 Rodrigo Gross Lopez - Senior React Developer | Fast and
            Performant Websites 👨‍💻
          </title>
        </Helmet>
        <BlogList />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.seeMoreContainer}
        >
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            color="secondary"
          >
            {t("seeMoreEntries")}
          </Button>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
