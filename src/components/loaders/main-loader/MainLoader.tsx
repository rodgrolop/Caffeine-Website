import { default as Grid } from '@mui/material/Unstable_Grid2'
import CircularProgress from '@mui/material/CircularProgress'

import { makeStyles } from '@mui/styles'
import { styles } from './styles'

const useStyles = makeStyles(styles)

const MainLoader = (): JSX.Element => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.loaderContainer}
        >
            <CircularProgress color="secondary" />
        </Grid>
    )
}
export default MainLoader
