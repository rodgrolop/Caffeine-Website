import Container from "@mui/material/Container";

import type { VNode } from "preact";
import type { PageContainerProps } from "./PageContainerProps";

const PageContainer = (props: PageContainerProps): VNode => (
  <Container
    maxWidth="lg"
    sx={{
      paddingTop: 6,
      paddingBottom: 10,
    }}
  >
    {props.children}
  </Container>
);

export default PageContainer;
