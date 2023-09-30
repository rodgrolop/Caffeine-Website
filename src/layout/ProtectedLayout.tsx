import { Suspense } from "preact/compat";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "preact/hooks";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";
import { UserContext } from "@context";

import type { VNode } from "preact";

const ProtectedLayout = (): VNode => {
  const location = useLocation();
  const user = useContext(UserContext);

  if (!user?.authenticated) {
    return (
      <Navigate to="/auth/login" replace={true} state={{ from: location }} />
    );
  }

  return (
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
};

export default ProtectedLayout;
