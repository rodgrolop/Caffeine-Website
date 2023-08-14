import { ReactElement } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { makeStyles } from '@mui/styles'

import { styles } from './styles'

const useStyles = makeStyles(styles)

const ChipsSkelleton = (): ReactElement => {
    const classes = useStyles()

    return (
        <>
            {Array.from(new Array(3)).map(
                (_item, index): ReactElement => (
                    <Skeleton
                        sx={{
                            height: 32,
                            width: 100,
                        }}
                        variant="rectangular"
                        key={index}
                        className={classes.categoryChip}
                    />
                )
            )}
        </>
    )
}

export default ChipsSkelleton
