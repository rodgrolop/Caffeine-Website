import { Suspense } from "preact/compat";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";

const GlobalLayout = ({ children }: { children: VNode[] }): VNode => (
  <>
    <AppBar />
    <Drawer />
    <div>
      <Suspense fallback={<ViewLoader />}>{children}</Suspense>
    </div>
    <Footer />
  </>
);

export default GlobalLayout;
