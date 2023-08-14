import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ViewLoader, AppBar, Drawer, Footer } from '@components'

const GlobalLayout = () => {
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

export default GlobalLayout
