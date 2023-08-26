import Container from "@mui/material/Container";

import type { VNode } from "preact";
import type { PageContainerProps } from "./PageContainerProps";

const AuthPageContainer = (props: PageContainerProps): VNode => (
  <Container
    maxWidth="lg"
    sx={{
      paddingTop: 9,
      paddingBottom: 12,
      display: "flex",
      flex: "1 1 auto",
    }}
  >
    {props.children}
  </Container>
);

export default AuthPageContainer;
