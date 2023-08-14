import { ReactElement } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SocialGrid = (): ReactElement => (
    <Grid
        container={true}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 1 }}
    >
        <IconButton
            aria-label={'Github'}
            sx={{ fontSize: 30 }}
            size="large"
            onClick={() =>
                window.open('https://github.com/rodgrolop', '_blank')
            }
        >
            <GitHubIcon />
        </IconButton>
        <IconButton
            aria-label={'Github'}
            sx={{ fontSize: 30 }}
            size="large"
            onClick={() =>
                window.open(
                    'https://www.linkedin.com/in/rodrigo-gross-lopez/',
                    '_blank'
                )
            }
        >
            <LinkedInIcon />
        </IconButton>
    </Grid>
)

export default SocialGrid
