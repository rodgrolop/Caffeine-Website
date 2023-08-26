import { HeroImage } from "@components";
import Container from "@mui/material/Container";
import type { VNode } from "preact";

const Test = (): VNode => {
  return (
    <>
      <HeroImage />
      <Container maxWidth="lg">
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Test;
