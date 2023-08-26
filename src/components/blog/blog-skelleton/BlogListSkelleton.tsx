import CardHeader from "@mui/material/CardHeader";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import type { VNode } from "preact";

type BlogListSkelletonProps = {
  amount: number;
};

const BlogListSkelleton = ({ amount }: BlogListSkelletonProps): VNode => (
  <>
    {Array.from(new Array(amount)).map(
      (_item, index): VNode => (
        <Grid xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardHeader
              title={
                <Typography variant="body1">
                  <Skeleton width="80%" />
                </Typography>
              }
              subheader={
                <Typography variant="caption">
                  <Skeleton width="30%" />
                </Typography>
              }
              disableTypography
            />
            <Skeleton sx={{ height: 240 }} variant="rectangular" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    )}
  </>
);

export default BlogListSkelleton;
