import { useRecoilState } from 'recoil'
import { layoutAtom } from '@atoms'
import { ModeSwitcher, LanguageSwitcher, UserMenu, MainLogo } from '@components'
import { useTranslation } from 'react-i18next'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { default as MuiAppBar } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link as RouterLink } from 'react-router-dom'

import type { ReactElement } from 'react'
import ElevationScroll from './ElevationScroll'
import { appBarLinks } from './app-bar-links'
import type { AppBarLinksProps } from './app-bar-links'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const AppBar = (): ReactElement => {
    const { t } = useTranslation()
    const [layout, setLayout] = useRecoilState(layoutAtom)

    const handleMenuClick = (): void => {
        setLayout({ ...layout, isDrawerOpen: !layout.isDrawerOpen })
    }

    return (
        <ElevationScroll>
            <MuiAppBar
                position="sticky"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <RouterLink to="/" aria-label="Caffeine logo">
                        <MainLogo
                            styles={{
                                width: 48,
                                height: 48,
                                marginLeft: 16,
                                marginRight: 16,
                                marginTop: 6,
                            }}
                        />
                    </RouterLink>
                    <div style={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        {appBarLinks.map(
                            ({
                                name,
                                path,
                            }: AppBarLinksProps): ReactElement => (
                                <Button
                                    key={name}
                                    component={RouterLink}
                                    to={path}
                                    sx={{
                                        color: 'white',
                                    }}
                                >
                                    {t(name)}
                                </Button>
                            )
                        )}
                    </Box>
                    <UserMenu />
                    <LanguageSwitcher />
                    <ModeSwitcher />
                </Toolbar>
            </MuiAppBar>
        </ElevationScroll>
    )
}

export default AppBar
