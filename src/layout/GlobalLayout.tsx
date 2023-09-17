import { Suspense } from "preact/compat";
import { Outlet } from "react-router-dom";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";

const GlobalLayout = ({ children }: { children: VNode[] }): VNode => (
  <>
    <AppBar />
    <Drawer />
    <Suspense fallback={<ViewLoader />}>{children}</Suspense>
    {/* <Footer /> */}
  </>
);

export default GlobalLayout;
