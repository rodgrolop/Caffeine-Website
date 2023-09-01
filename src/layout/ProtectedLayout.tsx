import { Suspense } from "preact/compat";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";
import { userAtom } from "@atoms";

import type { VNode } from "preact";

const ProtectedLayout = (): VNode => {
  const location = useLocation();
  const user = useRecoilValue(userAtom);

  if (!user?.authenticated) {
    return (
      <Navigate to="/auth/login" replace={true} state={{ from: location }} />
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

export default ProtectedLayout;
