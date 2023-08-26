import { Suspense } from "preact/compat";
import { Outlet } from "react-router-dom";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

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
