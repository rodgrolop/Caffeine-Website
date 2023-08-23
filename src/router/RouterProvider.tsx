import { lazy, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from '@layout'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'
import type { ReactElement } from 'react'
import { useGetMe } from '@authentication'
import { MainLoader } from '@components'
import { useRecoilValue } from 'recoil'
import { userFetchStatusAtom } from '@atoms'

// Auth
const Login = lazy(() => import('@pages/auth/login/Login'))
const ProviderAuth = lazy(() => import('@pages/auth/provider/ProviderAuth'))

// Public
const Home = lazy(() => import('@pages/home/Home'))
const Blog = lazy(() => import('@pages/blog/blog/Blog'))
const About = lazy(() => import('@pages/about/About'))
const SingleBlog = lazy(() => import('@pages/blog/single-blog/SingleBlog'))

// Legal
const PrivacyPolicy = lazy(() => import('@pages/legal/privacy/PrivacyPolicy'))
const Terms = lazy(() => import('@pages/legal/terms/Terms'))

// Private
const Test = lazy(() => import('@pages/test/Test'))

const useStyles = makeStyles(styles)

const router = createBrowserRouter([
    {
        path: 'auth',
        element: <AuthenticationLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'provider/:provider',
                element: <ProviderAuth />,
            },
        ],
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: 'test',
                element: <Test />,
            },
        ],
    },
    {
        path: '/',
        element: <GlobalLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'blog/:blogSlug',
                element: <SingleBlog />,
            },
            {
                path: 'about-me',
                element: <About />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />,
            },
            {
                path: 'terms-of-service',
                element: <Terms />,
            },
        ],
    },
])

const RouterProviderWrapper = (): ReactElement => {
    const classes = useStyles()
    const { getMe } = useGetMe()
    const { loading } = useRecoilValue(userFetchStatusAtom)

    useEffect(() => {
        const token = localStorage.getItem('token')
        // TODO Improve this condition
        token && getMe()
    }, [])

    return loading ? (
        <MainLoader />
    ) : (
        <div className={classes.routerContainer}>
            <RouterProvider router={router} />
            {/* <Routes>
                <Route path="auth" element={<AuthenticationLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route
                        path="provider/:provider"
                        element={<ProviderAuth />}
                    />
                </Route>
                <Route path="/" element={<ProtectedLayout />}>
                    <Route path="test" element={<Test />} />
                </Route>
                <Route path="/" element={<GlobalLayout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:blogSlug" element={<SingleBlog />} />
                    <Route path="about-me" element={<About />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-of-service" element={<Terms />} />
                </Route>
            </Routes> */}
        </div>
    )
}

export default RouterProviderWrapper
