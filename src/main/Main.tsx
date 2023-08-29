import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@apollo-client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { VNode } from "preact";

const Main = (): VNode => (
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider />
      </ThemeProvider>
    </RecoilRoot>
  </ApolloProvider>
);
export default Main;
