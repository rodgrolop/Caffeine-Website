import { default as Grid } from '@mui/material/Unstable_Grid2'

import { MainLogo } from '@components'
import { styles } from './styles'

import type { ReactElement } from 'react'
import type { HeroImageProps } from './HeroImageProps'
import Typography from '@mui/material/Typography'

const HeroImage = ({ title, subTitle }: HeroImageProps): ReactElement => {
    return (
        <Grid container={true} direction="column" sx={styles.heroBackground}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
                sx={{ flexGrow: 1, paddingLeft: 3 }}
            >
                <Grid>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#b71c1c',
                            fontWeight: 900,
                            fontSize: '3.2rem',
                        }}
                    >
                        RODRIGO
                    </Typography>
                </Grid>
                <Grid>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#fff',
                        }}
                    >
                        GROSS LÓPEZ
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <MainLogo
                    fillColor="white"
                    styles={{
                        padding: 16,
                        width: 200,
                        height: 180,
                        maxWidth: '35vw',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default HeroImage
