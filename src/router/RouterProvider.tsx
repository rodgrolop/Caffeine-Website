import { lazy, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from '@layout'

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
        <div style={styles.routerContainer}>
            <RouterProvider router={router} />
        </div>
    )
}

export default RouterProviderWrapper
