import { Suspense } from "preact/compat";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";
import { useRecoilValue } from "recoil";
import { userAtom } from "@atoms";

import type { VNode } from "preact";

const AuthenticationLayout = (): VNode => {
  const { state } = useLocation();
  const user = useRecoilValue(userAtom);

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
