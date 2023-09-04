import { default as Grid } from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { HeroImage, BlogList, PageContainer, DocumentHead } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";

const Home = (): VNode => {
  const { t } = useTranslation();

  return (
    <>
      <DocumentHead>
        <title>
          🚀 Rodrigo Gross Lopez - Senior React Developer | Fast and Performant
          Websites 👨‍💻
        </title>
      </DocumentHead>
      <HeroImage />
      <PageContainer>
        <BlogList />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.seeMoreContainer}
        >
          <Button
            component={RouterLink}
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
