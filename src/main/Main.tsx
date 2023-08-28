import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@apollo-client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { VNode } from "preact";

const Main = (): VNode => (
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <CssVarsProvider
        theme={theme}
        colorSchemeStorageKey="custom-theme-color-scheme"
        modeStorageKey="custom-theme-mode"
        defaultMode="dark"
      >
        <CssBaseline />
        <RouterProvider />
      </CssVarsProvider>
    </RecoilRoot>
  </ApolloProvider>
);
export default Main;
