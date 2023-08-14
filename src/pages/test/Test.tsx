import { HeroImage } from '@components'
import Container from '@mui/material/Container'
import type { ReactElement } from 'react'

const testLayoutProps = { title: 'Test' }

const Test = (): ReactElement => {
    return (
        <>
            <HeroImage {...testLayoutProps} />
            <Container maxWidth="lg">
                <h1>Home</h1>
            </Container>
        </>
    )
}

export default Test
