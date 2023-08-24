import { default as Grid } from '@mui/material/Unstable_Grid2'
import CircularProgress from '@mui/material/CircularProgress'

import { styles } from './styles'

const ViewLoader = (): JSX.Element => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={styles.loaderContainer}
        >
            <CircularProgress color="secondary" />
        </Grid>
    )
}
export default ViewLoader
