import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@api";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { VNode } from "preact";
import { LayoutContextProvider, UserContextProvider } from "@context";

const Main = (): VNode => (
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <LayoutContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider />
        </ThemeProvider>
      </LayoutContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
export default Main;
