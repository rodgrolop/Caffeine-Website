import { default as Grid } from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Link } from "@tanstack/react-router";
import { useT } from "talkr";

import { HeroImage, PageContainer, DocumentHead, BlogList } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";

const Home = (): VNode => {
  const { T } = useT();

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
            component={Link}
            to="/blog"
            variant="contained"
            color="secondary"
          >
            {T("seeMoreEntries")}
          </Button>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
