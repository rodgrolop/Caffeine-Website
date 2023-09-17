import { lazy } from "preact/compat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from "@layout";

import { MainLoader } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";
import { useGetMeQuery } from "@api";
import { Route } from "wouter-preact";

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

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "provider/:provider",
        element: <ProviderAuth />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <GlobalLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //       index: true,
  //     },
  //     {
  //       path: "blog",
  //       element: <Blog />,
  //     },
  //     {
  //       path: "blog/:blogSlug",
  //       element: <SingleBlog />,
  //     },
  //     {
  //       path: "about-me",
  //       element: <About />,
  //     },
  //     {
  //       path: "privacy-policy",
  //       element: <PrivacyPolicy />,
  //     },
  //     {
  //       path: "terms-of-service",
  //       element: <Terms />,
  //     },
  //   ],
  // },
]);

const RouterProviderWrapper = (): VNode => {
  const token = localStorage.getItem("token");
  const { isFetching } = useGetMeQuery(token);

  return isFetching ? (
    <MainLoader />
  ) : (
    <div style={styles.routerContainer}>
      <Route path="/:_*">
        <GlobalLayout>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about-me">
            <About />
          </Route>
        </GlobalLayout>
      </Route>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default RouterProviderWrapper;
