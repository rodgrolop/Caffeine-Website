import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@apollo-client'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@theme'
import RouterProvider from '@router'

import type { ReactElement } from 'react'

const Main = (): ReactElement => {
    return (
        <HelmetProvider>
            <ApolloProvider client={apolloClient}>
                <RecoilRoot>
                    <CssVarsProvider
                        theme={theme}
                        colorSchemeStorageKey="custom-theme-color-scheme"
                        modeStorageKey="custom-theme-mode"
                        defaultMode="dark"
                    >
                        <CssBaseline />
                        <BrowserRouter basename="/">
                            <RouterProvider />
                        </BrowserRouter>
                    </CssVarsProvider>
                </RecoilRoot>
            </ApolloProvider>
        </HelmetProvider>
    )
}

export default Main
