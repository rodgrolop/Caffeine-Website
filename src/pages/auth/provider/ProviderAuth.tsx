import { useEffect } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'react-router-dom'
import { useParams, useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { AuthPageContainer } from '@components'
import { useProviderAuthentication } from '@authentication'
import { userLoginStatusAtom, userFetchStatusAtom } from '@atoms'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'

import type { ReactElement } from 'react'

const useStyles = makeStyles(styles)

const getProviderLogo = (provider?: string): ReactElement | null => {
    switch (provider) {
        case 'google':
            return <GoogleIcon fontSize="large" />
        default:
            return null
    }
}

const ProviderAuth = (): ReactElement => {
    const classes = useStyles()
    const { t } = useTranslation()
    const { loading, errors } = useRecoilValue(userLoginStatusAtom)
    const { loading: getMeLoading } = useRecoilValue(userFetchStatusAtom)
    const { provider } = useParams()
    const { authWithToken } = useProviderAuthentication()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const token = searchParams.get('access_token')
        if (!getMeLoading && token && provider) {
            authWithToken(token, provider as string)
        }
    }, [getMeLoading])

    return (
        <AuthPageContainer>
            <Helmet>
                <title>
                    {`🔓 Login with ${provider} | Rodrigo Gross Lopez - Senior React Developer`}
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
                <Grid>{getProviderLogo(provider)}</Grid>
                <Grid>
                    {errors?.message ? (
                        <Typography variant="h5" component="div">
                            {t('somethingHappened')}
                        </Typography>
                    ) : (
                        <Typography variant="h5" component="div">
                            {t('authenticating')}
                        </Typography>
                    )}
                </Grid>
                <Grid>
                    {loading ? <CircularProgress color="secondary" /> : null}
                </Grid>
                <Grid>
                    {errors?.message ? (
                        <Typography
                            variant="caption"
                            gutterBottom
                            component="div"
                        >
                            {errors.message}
                        </Typography>
                    ) : null}
                </Grid>
                <Grid>
                    {errors?.message ? (
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/auth/login"
                        >
                            {t('backLogin')}
                        </Button>
                    ) : null}
                </Grid>
            </Grid>
        </AuthPageContainer>
    )
}

export default ProviderAuth
