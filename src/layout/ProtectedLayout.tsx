import { Suspense, useEffect } from "preact/compat";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ViewLoader, AppBar, Drawer, Footer } from "@components";
import { userAtom } from "@atoms";

import type { VNode } from "preact";

const ProtectedLayout = (): VNode => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user?.authenticated) {
      navigate("/auth/login", {
        replace: true,
        state: { from: location },
      });
    }
  }, [user, navigate, location]);

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
