import type { ReactElement } from 'react'
import ApolloIcon from '@components/custom-icons/ApolloIcon'
import CracoIcon from '@components/custom-icons/CracoIcon'
import CloudinaryIcon from '@components/custom-icons/CloudinaryIcon'
import DigitalOceanIcon from '@components/custom-icons/DigitalOceanIcon'
import GraphQLIcon from '@components/custom-icons/GraphQLIcon'
import MaterialUIIcon from '@components/custom-icons/MaterialUIIcon'
import PostgreSQLIcon from '@components/custom-icons/PostgreSQLIcon'
import ReactIcon from '@components/custom-icons/ReactIcon'
import ReactRouterIcon from '@components/custom-icons/ReactRouterIcon'
import RecoilIcon from '@components/custom-icons/RecoilIcon'
import StrapiIcon from '@components/custom-icons/StrapiIcon'
import TypeScriptIcon from '@components/custom-icons/TypeScriptIcon'

export type FooterImageProps = {
    name: string
    link: string
    icon?: ReactElement
}

export const footerImages: FooterImageProps[] = [
    {
        name: 'Strapi',
        link: 'https://strapi.io/',
        icon: <StrapiIcon />,
    },
    {
        name: 'GraphQL',
        link: 'https://graphql.org/',
        icon: <GraphQLIcon />,
    },
    {
        name: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
        icon: <PostgreSQLIcon />,
    },
    {
        name: 'Digital Ocean',
        link: 'https://www.digitalocean.com/',
        icon: <DigitalOceanIcon />,
    },
    {
        name: 'ReactJS',
        link: 'https://reactjs.org/',
        icon: <ReactIcon />,
    },
    {
        name: 'Craco',
        link: 'https://craco.js.org/',
        icon: <CracoIcon />,
    },
    {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: <TypeScriptIcon />,
    },
    {
        name: 'RecoilJS',
        link: 'https://recoiljs.org/',
        icon: <RecoilIcon />,
    },
    {
        name: 'Material UI',
        link: 'https://mui.com/',
        icon: <MaterialUIIcon />,
    },
    {
        name: 'React Router',
        link: 'https://reactrouter.com/en/main',
        icon: <ReactRouterIcon />,
    },
    {
        name: 'Apollo GraphQL',
        link: 'https://www.apollographql.com/',
        icon: <ApolloIcon />,
    },
    {
        name: 'Cloudinary',
        link: 'https://cloudinary.com/',
        icon: <CloudinaryIcon />,
    },
]
