export type AppBarLinksProps = {
    name: string
    path: string
}

export const appBarLinks: AppBarLinksProps[] = [
    { name: 'home', path: '/' },
    {
        name: 'blog',
        path: '/blog',
    },
    { name: 'aboutMe', path: '/about-me' },
]
