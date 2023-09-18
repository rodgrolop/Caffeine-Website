import { Suspense } from "preact/compat";
import { useLocation } from "wouter-preact";
import { useContext } from "preact/hooks";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";
import { UserContext } from "@context";

const AuthenticationLayout = ({ children }: { children: VNode[] }): VNode => {
  const [, setLocation] = useLocation();
  const user = useContext(UserContext);

  if (user?.authenticated) {
    setLocation("/", { replace: true });
  }

  return (
    <>
      <AppBar />
      <Drawer />
      <div>
        <Suspense fallback={<ViewLoader />}>{children}</Suspense>
      </div>
      <Footer />
    </>
  );
};

export default AuthenticationLayout;
