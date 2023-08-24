import { default as Grid } from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

import type { ReactElement } from 'react'
import { HeroImage, BlogList, PageContainer } from '@components'

const Home = (): ReactElement => {
    const { t } = useTranslation()

    return (
        <>
            <HeroImage />
            <PageContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                        🚀 Rodrigo Gross Lopez - Senior React Developer | Fast
                        and Performant Websites 👨‍💻
                    </title>
                </Helmet>
                <BlogList />
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={styles.seeMoreContainer}
                >
                    <Button
                        component={RouterLink}
                        to="/blog"
                        variant="contained"
                        color="secondary"
                    >
                        {t('seeMoreEntries')}
                    </Button>
                </Grid>
            </PageContainer>
        </>
    )
}

export default Home
