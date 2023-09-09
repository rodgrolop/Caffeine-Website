import { default as Grid } from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useT } from "talkr";

import { HeroImage, BlogList, PageContainer, DocumentHead } from "@components";

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
            component={RouterLink}
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
