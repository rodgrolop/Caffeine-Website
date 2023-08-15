import { Suspense, useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

import { ViewLoader, AppBar, Drawer, Footer } from '@components'
import { useRecoilValue } from 'recoil'
import { userAtom } from '@atoms'

const ProtectedLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useRecoilValue(userAtom)

    useEffect(() => {
        if (!user?.authenticated) {
            navigate('/auth/login', {
                replace: true,
                state: { from: location },
            })
        }
    }, [user, navigate, location])

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

export default ProtectedLayout
