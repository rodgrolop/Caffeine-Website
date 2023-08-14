import { default as Grid } from '@mui/material/Unstable_Grid2'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LoginForm, AuthPageContainer } from '@components'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'

import type { ReactElement } from 'react'

const useStyles = makeStyles(styles)

const Login = (): ReactElement => {
    const { t } = useTranslation()
    const classes = useStyles()

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
                className={classes.formContainer}
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
                    <IconButton
                        component={Link}
                        className={classes.googleButton}
                        to={`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/connect/google`}
                    >
                        <GoogleIcon
                            fontSize="small"
                            style={{ color: 'white' }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        </AuthPageContainer>
    )
}

export default Login
