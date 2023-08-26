import { default as Grid } from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import type { VNode } from "preact";
import type { NoResultsProps } from "./NoResultsProps";

const NoResults = ({ message }: NoResultsProps): VNode => (
  <Grid
    container
    spacing={2}
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Grid>
      <Typography variant="caption">{message}</Typography>
    </Grid>
  </Grid>
);

export default NoResults;
