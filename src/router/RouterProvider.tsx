import { lazy } from "preact/compat";
import { AuthenticationLayout, GlobalLayout, ProtectedLayout } from "@layout";

import { MainLoader } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";
import { useGetMeQuery } from "@api";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";

// Auth
const Login = lazy(() => import("./../pages/auth/login/Login"));
const ProviderAuth = lazy(
  () => import("./../pages/auth/provider/ProviderAuth")
);

// Public
const Home = lazy(() => import("./../pages/home/Home"));
const Blog = lazy(() => import("./../pages/blog/blog/Blog"));
const About = lazy(() => import("./../pages/about/About"));
const SingleBlog = lazy(() => import("./../pages/blog/single-blog/SingleBlog"));

// Legal
const PrivacyPolicy = lazy(
  () => import("./../pages/legal/privacy/PrivacyPolicy")
);
const Terms = lazy(() => import("./../pages/legal/terms/Terms"));

// Private
const Test = lazy(() => import("./../pages/test/Test"));

const rootRoute = new RootRoute();

const globalLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: GlobalLayout,
  id: "global-layout",
});

const authenticationLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: AuthenticationLayout,
  id: "authentication-layout",
});

const protectedLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: ProtectedLayout,
  id: "protected-layout",
});

// Global Routes
const homeRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: Home,
  path: "/",
});

const aboutRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: About,
  path: "about-me",
});

const privacyRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: PrivacyPolicy,
  path: "privacy-policy",
});

const termsRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: Terms,
  path: "terms-of-service",
});

const blogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: Blog,
  path: "blog",
});

const singleBlogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  component: SingleBlog,
  path: "blog/$blogSlug",
});

// Protected Routes
const testRoute = new Route({
  getParentRoute: () => protectedLayoutRoute,
  component: Test,
  path: "test",
});

// Authentication Routes
const loginRoute = new Route({
  getParentRoute: () => authenticationLayoutRoute,
  component: Login,
  path: "auth/login",
});

const loginProviderRoute = new Route({
  getParentRoute: () => authenticationLayoutRoute,
  component: ProviderAuth,
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
    </div>
  );
};

export default RouterProviderWrapper;
