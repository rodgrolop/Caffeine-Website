import { useEffect, useState } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'

import { styles } from './styles'

import type { ReactElement, ChangeEvent } from 'react'
import { useLogin, type loginInputProps } from '@authentication'
import { useRecoilValue } from 'recoil'
import { userLoginStatusAtom } from '@atoms'
import SendIcon from '@mui/icons-material/Send'
import CircularProgress from '@mui/material/CircularProgress'

const LoginForm = (): ReactElement => {
    const { logIn } = useLogin()
    const { loading, errors } = useRecoilValue(userLoginStatusAtom)
    const [inputErrors, setInputErrors] = useState<string | undefined>(
        undefined
    )

    const [formState, setFormState] = useState<loginInputProps>({
        identifier: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState<Boolean>(false)

    const handleClickShowPassword = (): void => setShowPassword((show) => !show)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputErrors(undefined)
        const { name, value } = event.target
        setFormState({ ...formState, [name]: value })
    }

    const onSubmit = () => {
        logIn(formState)
    }

    useEffect(() => {
        setInputErrors(errors?.message)
    }, [errors])

    return (
        <>
            <Typography variant="h2" gutterBottom component="div">
                Login
            </Typography>
            <Grid xs={10} sx={styles.inputGrid}>
                <FormControl
                    variant="outlined"
                    fullWidth={true}
                    color="secondary"
                >
                    <InputLabel htmlFor="outlined-adornment-user">
                        Email/Username
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-user"
                        name="identifier"
                        error={Boolean(inputErrors)}
                        onChange={onChange}
                        value={formState.identifier}
                        label={'Email/Username'}
                    />
                </FormControl>
            </Grid>
            <Grid xs={10} sx={styles.inputGrid}>
                <FormControl
                    variant="outlined"
                    fullWidth={true}
                    color="secondary"
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        error={Boolean(inputErrors)}
                        onChange={onChange}
                        value={formState.password}
                        label={'Password'}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid sx={{ height: '52px' }}>
                {loading ? (
                    <CircularProgress color="secondary" size={30} />
                ) : (
                    <Button
                        onClick={onSubmit}
                        variant="contained"
                        color="secondary"
                        endIcon={
                            <SendIcon
                                style={{ width: '1rem', height: '1rem' }}
                            />
                        }
                    >
                        Login
                    </Button>
                )}
            </Grid>
        </>
    )
}
export default LoginForm
