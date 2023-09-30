import { Suspense } from "preact/compat";
import { Outlet } from "react-router-dom";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";

const GlobalLayout = (): VNode => (
  <>
    <AppBar />
    <Drawer />
    <div>
      <Suspense fallback={<ViewLoader />}>
        <Outlet />
      </Suspense>
    </div>
    <Footer />
  </>
);

export default GlobalLayout;
