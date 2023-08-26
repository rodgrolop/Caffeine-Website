import { default as Grid } from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import type { VNode } from "preact";

import { styles } from "./styles";

const ViewLoader = (): VNode => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={styles.loaderContainer}
  >
    <CircularProgress color="secondary" />
  </Grid>
);

export default ViewLoader;
