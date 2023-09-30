import { lazy } from "preact/compat";
import { AuthenticationLayout, GlobalLayout, ProtectedLayout } from "@layout";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { MainLoader } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";
import { useGetMeQuery } from "@api";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
  lazyRouteComponent,
} from "@tanstack/react-router";

const rootRoute = new RootRoute();

const globalLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: GlobalLayout,
  id: "/global-layout",
});

const authenticationLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: AuthenticationLayout,
  id: "/authentication-layout",
});

const protectedLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: ProtectedLayout,
  id: "/protected-layout",
});

// Global Routes
const homeRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/home/Home")),
  path: "/",
});

const aboutRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/about/About")),
  path: "about-me",
});

const privacyRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(
    () => import("./../pages/legal/privacy/PrivacyPolicy")
  ),
  path: "privacy-policy",
});

const termsRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/legal/terms/Terms")),
  path: "terms-of-service",
});

const blogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/blog/blog/Blog")),
  path: "blog",
});

const singleBlogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: lazyRouteComponent(
    () => import("./../pages/blog/single-blog/SingleBlog")
  ),
  path: "blog/$blogSlug",
});

// Protected Routes
const testRoute = new Route({
  getParentRoute: () => protectedLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/test/Test")),
  path: "test",
});

// Authentication Routes
const loginRoute = new Route({
  getParentRoute: () => authenticationLayoutRoute,
  component: lazyRouteComponent(() => import("./../pages/auth/login/Login")),
  path: "auth/login",
});

const loginProviderRoute = new Route({
  getParentRoute: () => authenticationLayoutRoute,
  component: lazyRouteComponent(
    () => import("./../pages/auth/provider/ProviderAuth")
  ),
  path: "auth/provider/$provider",
});

const routeTree = rootRoute.addChildren([
  globalLayoutRoute.addChildren([
    homeRoute,
    aboutRoute,
    privacyRoute,
    termsRoute,
    blogRoute,
    singleBlogRoute,
  ]),
  authenticationLayoutRoute.addChildren([loginRoute, loginProviderRoute]),
  protectedLayoutRoute.addChildren([testRoute]),
]);

const router = new Router({ routeTree });

const RouterProviderWrapper = (): VNode => {
  const token = localStorage.getItem("token");
  const { isFetching } = useGetMeQuery(token);

  return isFetching ? (
    <MainLoader />
  ) : (
    <div style={styles.routerContainer}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </div>
  );
};

export default RouterProviderWrapper;
