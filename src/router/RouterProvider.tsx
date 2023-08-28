import { lazy, useEffect } from "preact/compat";
// import { createBrowserRouter } from "react-router-dom";
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from "@layout";

import { useGetMe } from "@authentication";
import { MainLoader } from "@components";
import { useRecoilValue } from "recoil";
import { userFetchStatusAtom } from "@atoms";

import type { VNode } from "preact";

import { styles } from "./styles";
import {
  RouterProvider,
  Route,
  RootRoute,
  Router,
  lazyRouteComponent,
} from "@tanstack/react-router";

// // Auth
// const Login = lazy(() => import("./../pages/auth/login/Login"));
// const ProviderAuth = lazy(
//   () => import("./../pages/auth/provider/ProviderAuth")
// );

// // Public
// const Blog = lazy(() => import("./../pages/blog/blog/Blog"));
// const SingleBlog = lazy(() => import("./../pages/blog/single-blog/SingleBlog"));

// // Legal
// const PrivacyPolicy = lazy(
//   () => import("./../pages/legal/privacy/PrivacyPolicy")
// );
// const Terms = lazy(() => import("./../pages/legal/terms/Terms"));

// // Private
// const Test = lazy(() => import("./../pages/test/Test"));

const rootRoute = new RootRoute();

const globalLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "global-layout",
  component: () => <GlobalLayout />,
});
const indexRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  path: "/",
  id: "home",
  component: lazyRouteComponent(() => import("./../pages/home/Home")),
});

const aboutRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  path: "/about-me",
  id: "about-me",
  component: lazyRouteComponent(() => import("./../pages/about/About")),
});

const blogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  path: "/blog",
  id: "blog",
  component: lazyRouteComponent(() => import("./../pages/blog/blog/Blog")),
});

const singleBlogRoute = new Route({
  getParentRoute: () => globalLayoutRoute,
  path: "/blog/$blogSlug",
  id: "single-blog",
  component: lazyRouteComponent(
    () => import("./../pages/blog/single-blog/SingleBlog")
  ),
});

// const indexRoute = new Route({
//   getParentRoute: () => globalLayoutRoute,
//   path: "/test",
//   component: () => <Home />,
// });

// const indexRoute = new Route({
//   getParentRoute: () => globalLayoutRoute,
//   path: "/test",
//   component: () => <Home />,
// });

const routeTree = rootRoute.addChildren([
  globalLayoutRoute.addChildren([
    indexRoute,
    aboutRoute,
    blogRoute,
    singleBlogRoute,
  ]),
]);

const router = new Router({ routeTree });

// // const router = createBrowserRouter([
// //   {
// //     path: "auth",
// //     element: <AuthenticationLayout />,
// //     children: [
// //       {
// //         path: "login",
// //         element: <Login />,
// //       },
// //       {
// //         path: "provider/:provider",
// //         element: <ProviderAuth />,
// //       },
// //     ],
// //   },
// //   {
// //     path: "/",
// //     element: <ProtectedLayout />,
// //     children: [
// //       {
// //         path: "test",
// //         element: <Test />,
// //       },
// //     ],
// //   },
// //   {
// //     path: "/",
// //     element: <GlobalLayout />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <Home />,
// //         index: true,
// //       },
// //       {
// //         path: "blog",
// //         element: <Blog />,
// //       },
// //       {
// //         path: "blog/:blogSlug",
// //         element: <SingleBlog />,
// //       },
// //       {
// //         path: "about-me",
// //         element: <About />,
// //       },
// //       {
// //         path: "privacy-policy",
// //         element: <PrivacyPolicy />,
// //       },
// //       {
// //         path: "terms-of-service",
// //         element: <Terms />,
// //       },
// //     ],
// //   },
// // ]);
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

const RouterProviderWrapper = (): VNode => {
  const { getMe } = useGetMe();
  const { loading } = useRecoilValue(userFetchStatusAtom);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // TODO Improve this condition
    token && getMe();
  }, []);

  return loading ? (
    <MainLoader />
  ) : (
    <div style={styles.routerContainer}>
      <RouterProvider router={router} />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default RouterProviderWrapper;
