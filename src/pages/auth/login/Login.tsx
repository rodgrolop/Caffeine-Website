import { default as Grid } from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LoginForm, AuthPageContainer } from '@components'

import { styles } from './styles'

import type { ReactElement } from 'react'
import GoogleIcon from '@components/custom-icons/GoogleIcon'
import SvgIcon from '@mui/material/SvgIcon'
import Button from '@mui/material/Button'

const Login = (): ReactElement => {
    const { t } = useTranslation()

    return (
        <AuthPageContainer>
            <Helmet>
                <title>
                    🔓 Login | Rodrigo Gross Lopez - Senior React Developer
                </title>
            </Helmet>
            <Grid
                container={true}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={styles.formContainer}
                spacing={2}
            >
                <LoginForm />
                <Grid>
                    <Typography
                        variant="caption"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                    >
                        {t('orLoginWithProvider')}
                    </Typography>
                </Grid>
                <Grid>
                    <Button
                        component={Link}
                        sx={styles.googleButton}
                        size="medium"
                        to={`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/connect/google`}
                        variant="contained"
                        startIcon={
                            <SvgIcon sx={styles.icon}>
                                <GoogleIcon />
                            </SvgIcon>
                        }
                    >
                        Google
                    </Button>
                </Grid>
            </Grid>
        </AuthPageContainer>
    )
}

export default Login
