import { Suspense } from "preact/compat";
import { useContext } from "preact/hooks";
import { Outlet, useNavigate } from "@tanstack/react-router";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";
import { UserContext } from "@context";

const AuthenticationLayout = (): VNode => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  if (user?.authenticated) {
    navigate({ to: "/" });
  }

  return (
    <>
      <AppBar />
      <Drawer />
      <Suspense fallback={<ViewLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default AuthenticationLayout;
