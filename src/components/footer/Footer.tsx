import { default as Grid } from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import { MainLogo } from '@components'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'

import type { ReactElement } from 'react'

import { footerImages, type FooterImageProps } from './footer-images'

const useStyles = makeStyles(styles)

const Footer = (): ReactElement => {
    const classes = useStyles()

    return (
        <Grid
            container={true}
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.footerContainer}
        >
            <Container maxWidth="xl">
                <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        paddingTop: 2,
                    }}
                >
                    <MainLogo
                        styles={{
                            width: 64,
                            height: 64,
                            display: 'flex',
                            margin: 'auto',
                        }}
                    />
                </Grid>
                <Grid
                    container={true}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        paddingTop: 2,
                        paddingBottom: 4,
                    }}
                >
                    {footerImages.map((image: FooterImageProps) => (
                        <IconButton
                            aria-label={image.name}
                            key={image.name}
                            sx={{ fontSize: 30 }}
                            size="large"
                            onClick={() => window.open(image.link, '_blank')}
                        >
                            <SvgIcon>{image.icon}</SvgIcon>
                        </IconButton>
                    ))}
                </Grid>
                <Grid
                    container={true}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        paddingBottom: 2,
                    }}
                >
                    <Typography align="center" variant="caption">
                        © 2023 Rodrigo Gross López
                    </Typography>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Footer
