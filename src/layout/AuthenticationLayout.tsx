import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router'

import { ViewLoader, AppBar, Drawer, Footer } from '@components'
import { useRecoilValue } from 'recoil'
import { userAtom } from '@atoms'

const AuthenticationLayout = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const user = useRecoilValue(userAtom)
    useEffect(() => {
        if (user?.authenticated) {
            navigate((state as any)?.from?.pathname ?? '/', { replace: true })
        }
    }, [user, navigate, state])

    return (
        <>
            <AppBar />
            <Drawer />
            <Suspense fallback={<ViewLoader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default AuthenticationLayout
