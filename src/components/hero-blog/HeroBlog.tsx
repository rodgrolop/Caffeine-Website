import { default as Grid } from "@mui/material/Unstable_Grid2";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import type { VNode } from "preact";
import type { HeroBlogProps } from "./HeroBlogProps";

import { styles } from "./styles";

const HeroBlog = ({ heroImageUrl, title, excerpt }: HeroBlogProps): VNode => (
  <Grid
    container={true}
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    sx={{
      backgroundImage: `url('${heroImageUrl}')`,
      ...styles.heroBackground,
    }}
  >
    <Container maxWidth="lg">
      <Grid>
        <Typography variant="h2" noWrap>
          {title}
        </Typography>
        <Typography variant="body1" noWrap>
          {excerpt}
        </Typography>
      </Grid>
    </Container>
  </Grid>
);

export default HeroBlog;
