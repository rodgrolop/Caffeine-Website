import { Suspense } from "preact/compat";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";
import { Outlet } from "@tanstack/react-router";

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
