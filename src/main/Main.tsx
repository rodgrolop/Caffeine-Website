import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@api";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Talkr } from "talkr";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { VNode } from "preact";
import { LayoutContextProvider, UserContextProvider } from "@context";
import en from "./../i18n/en.json";
import es from "./../i18n/es.json";

const Main = (): VNode => (
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <LayoutContextProvider>
        <Talkr languages={{ en, es }} defaultLanguage="en">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider />
          </ThemeProvider>
        </Talkr>
      </LayoutContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
export default Main;
