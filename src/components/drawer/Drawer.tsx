import type { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { layoutAtom } from '@atoms'

import { default as MuiDrawer } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import {
    drawerLinksGlobal,
    drawerLinksProtected,
    drawerLinksAuthentication,
    type DrawerLinksProps,
} from './drawer-links'
import { SocialGrid } from '@components'

const Drawer = (): ReactElement => {
    const { t } = useTranslation()
    const { pathname } = useLocation()
    const [layout, setLayout] = useRecoilState(layoutAtom)

    const handleClose = (): void =>
        setLayout({ ...layout, isDrawerOpen: false })

    return (
        <MuiDrawer open={layout.isDrawerOpen} onClose={handleClose}>
            <Toolbar />
            <Box
                sx={{
                    width: 250,
                    height: '100%',
                    paddingTop: 1,
                }}
                role="presentation"
                onClick={handleClose}
                onKeyDown={handleClose}
            >
                <List disablePadding>
                    {drawerLinksGlobal.map(
                        ({
                            name,
                            path,
                            Icon,
                        }: DrawerLinksProps): ReactElement => (
                            <ListItem disablePadding key={name}>
                                <ListItemButton
                                    component={Link}
                                    to={path}
                                    selected={pathname === path}
                                >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={t(name)} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List disablePadding>
                    {drawerLinksProtected.map(
                        ({
                            name,
                            path,
                            Icon,
                        }: DrawerLinksProps): ReactElement => (
                            <ListItem disablePadding key={name}>
                                <ListItemButton
                                    component={Link}
                                    to={path}
                                    selected={pathname === path}
                                >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={t(name)} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List disablePadding>
                    {drawerLinksAuthentication.map(
                        ({
                            name,
                            path,
                            Icon,
                        }: DrawerLinksProps): ReactElement => (
                            <ListItem disablePadding key={name}>
                                <ListItemButton
                                    component={Link}
                                    to={path}
                                    selected={pathname === path}
                                >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={t(name)} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
            <SocialGrid />
        </MuiDrawer>
    )
}

export default Drawer
