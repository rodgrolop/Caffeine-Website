import { default as Grid } from '@mui/material/Unstable_Grid2'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styles } from './styles'

import type { ReactElement } from 'react'
import type { HeroBlogProps } from './HeroBlogProps'

const HeroBlog = ({
    heroImageUrl,
    title,
    excerpt,
}: HeroBlogProps): ReactElement => {
    return (
        <Grid
            container={true}
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
                backgroundImage: `url('${heroImageUrl}')`,
                ...styles.heroBackground,
            }}
        >
            <Container maxWidth="lg">
                <Grid>
                    <Typography variant="h2" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="body1" noWrap>
                        {excerpt}
                    </Typography>
                </Grid>
            </Container>
        </Grid>
    )
}

export default HeroBlog
