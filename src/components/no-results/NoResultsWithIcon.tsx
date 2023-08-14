import { ReactElement } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

type NoResultsProps = {
    message: string
}

const NoResultsWithIcon = ({ message }: NoResultsProps): ReactElement => (
    <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="column"
    >
        <Grid>
            <Typography variant="body2">{message}</Typography>
        </Grid>
        <Grid>
            <TravelExploreIcon fontSize="large" />
        </Grid>
    </Grid>
)

export default NoResultsWithIcon
