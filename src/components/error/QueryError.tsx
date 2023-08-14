import { ReactElement } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

type NoResultsProps = {
    message: string
}

const QueryError = ({ message }: NoResultsProps): ReactElement => (
    <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="column"
    >
        <Grid>
            <Typography variant="caption">{message}</Typography>
        </Grid>
    </Grid>
)

export default QueryError
