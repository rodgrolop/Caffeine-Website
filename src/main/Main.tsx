import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@api";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { VNode } from "preact";

const Main = (): VNode => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider />
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
);
export default Main;
