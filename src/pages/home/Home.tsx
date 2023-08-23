import { default as Grid } from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'
import { styles } from './styles'

import type { ReactElement } from 'react'
import { HeroImage, BlogList, PageContainer } from '@components'

const useStyles = makeStyles(styles)

const homeLayoutProps = { title: 'Home' }

const Home = (): ReactElement => {
    const { t } = useTranslation()
    const classes = useStyles()

    return (
        <>
            <HeroImage {...homeLayoutProps} />
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
                    className={classes.seeMoreContainer}
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
