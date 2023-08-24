import type { ReactElement, ReactNode } from 'react'
import Container from '@mui/material/Container'

type PageContainerProps = { children: ReactNode }

const PageContainer = (props: PageContainerProps): ReactElement => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: 6,
                paddingBottom: 10,
            }}
        >
            {props.children}
        </Container>
    )
}

export default PageContainer
