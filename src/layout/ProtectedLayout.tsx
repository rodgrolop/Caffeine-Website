import { Suspense } from "preact/compat";
import { useContext } from "preact/hooks";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";
import { UserContext } from "@context";

import type { VNode } from "preact";
import { Outlet, useNavigate } from "@tanstack/react-router";

const ProtectedLayout = (): VNode => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  if (!user?.authenticated) {
    navigate({ to: "/auth/login" });
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

export default ProtectedLayout;
