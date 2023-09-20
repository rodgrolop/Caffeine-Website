import { Suspense } from "preact/compat";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "preact/hooks";
import { Outlet } from "@tanstack/react-router";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { VNode } from "preact";
import { UserContext } from "@context";

const AuthenticationLayout = (): VNode => {
  const { state } = useLocation();
  const user = useContext(UserContext);

  if (user?.authenticated) {
    return (
      <Navigate to={(state as any)?.from?.pathname ?? "/"} replace={true} />
    );
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
