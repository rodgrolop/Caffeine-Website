import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { PageContainer } from "@components";

import type { VNode } from "preact";
import { styles } from "./styles";

const SingleBlogSkelleton = (): VNode => (
  <PageContainer>
    <Typography variant="h3" gutterBottom>
      <Skeleton width="80%" />
    </Typography>
    <Typography variant="h6" gutterBottom>
      <Skeleton width="70%" />
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
          <Skeleton width={100} />
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
          <Skeleton width={1} />
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="body1" fontSize={"small"}>
          <Skeleton width={80} />
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
      <Skeleton sx={styles.categoryChip} variant="rectangular" />
      <div style={{ flexGrow: 1 }} />
      <Skeleton
        sx={{
          height: 40,
          width: 40,
          marginRight: 1,
        }}
        variant="circular"
      />
      <Skeleton
        sx={{
          height: 40,
          width: 40,
        }}
        variant="circular"
      />
    </Grid>
    <Skeleton sx={styles.blogMainImage} variant="rectangular" />
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Skeleton width="80%" />
    </Typography>
    <>
      {Array.from(new Array(9)).map(
        (_item, index): VNode => (
          <Typography
            variant="body1"
            fontSize={"small"}
            key={index}
            gutterBottom
          >
            <Skeleton width="100%" />
          </Typography>
        )
      )}
    </>
    <Typography variant="body1" fontSize={"small"} gutterBottom>
      <Skeleton width="60%" />
    </Typography>
  </PageContainer>
);

export default SingleBlogSkelleton;
