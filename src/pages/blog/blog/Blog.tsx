import { BlogList, HeroImage, PageContainer } from '@components'

import { Helmet } from 'react-helmet-async'
import type { ReactElement } from 'react'

const homeLayoutProps = { title: 'Blog' }

const Blog = (): ReactElement => {
    return (
        <>
            <HeroImage {...homeLayoutProps} />{' '}
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    📰 Blog | Rodrigo Gross Lopez - Senior React Developer
                </title>
            </Helmet>
            <PageContainer>
                <BlogList pageSize={12} categories={true} pagination={true} />
            </PageContainer>
        </>
    )
}

export default Blog
