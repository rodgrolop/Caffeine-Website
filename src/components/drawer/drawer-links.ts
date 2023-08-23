import HomeIcon from '@mui/icons-material/Home'
import BugReportIcon from '@mui/icons-material/BugReport'
import LoginIcon from '@mui/icons-material/Login'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import type { SvgIconTypeMap } from '@mui/material/SvgIcon'

export type DrawerLinksProps = {
    name: string
    path: string
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}

export const drawerLinksGlobal: DrawerLinksProps[] = [
    { name: 'home', path: '/', Icon: HomeIcon },
    {
        name: 'blog',
        path: '/blog',
        Icon: RssFeedIcon,
    },
    { name: 'aboutMe', path: '/about-me', Icon: AccountCircleIcon },
]

export const drawerLinksProtected: DrawerLinksProps[] = [
    { name: 'test', path: '/test', Icon: BugReportIcon },
]

export const drawerLinksAuthentication: DrawerLinksProps[] = [
    { name: 'login', path: '/auth/login', Icon: LoginIcon },
]
