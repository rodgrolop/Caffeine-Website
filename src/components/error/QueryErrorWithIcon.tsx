import { ReactElement } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import SearchOffIcon from '@mui/icons-material/SearchOff'

type NoResultsProps = {
    message: string
}

const QueryErrorWithIcon = ({ message }: NoResultsProps): ReactElement => (
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
            <SearchOffIcon fontSize="large" />
        </Grid>
    </Grid>
)

export default QueryErrorWithIcon
