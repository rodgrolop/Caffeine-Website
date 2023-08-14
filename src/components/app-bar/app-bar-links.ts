export type AppBarLinksProps = {
    name: string
    path: string
    search?: string
}

export const appBarLinks: AppBarLinksProps[] = [
    { name: 'home', path: '/' },
    {
        name: 'blog',
        path: '/blog',
        search: '?page=1&categories=all',
    },
    { name: 'aboutMe', path: '/about-me' },
]
