import { ReactElement } from 'react'
import Skeleton from '@mui/material/Skeleton'

import { styles } from './styles'

const ChipsSkelleton = (): ReactElement => {
    return (
        <>
            {Array.from(new Array(3)).map(
                (_item, index): ReactElement => (
                    <Skeleton
                        sx={styles.categoryChip}
                        variant="rectangular"
                        key={index}
                    />
                )
            )}
        </>
    )
}

export default ChipsSkelleton
