import { Suspense } from "preact/compat";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import { Outlet } from "@tanstack/react-router";

import type { VNode } from "preact";

const GlobalLayout = (): VNode => (
  <>
    <AppBar />
    <Drawer />
    <Suspense fallback={<ViewLoader />}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

export default GlobalLayout;
