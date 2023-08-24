import type { ReactElement, ReactNode } from 'react'
import Container from '@mui/material/Container'

type PageContainerProps = { children: ReactNode }

const AuthPageContainer = (props: PageContainerProps): ReactElement => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: 9,
                paddingBottom: 12,
                display: 'flex',
                flex: '1 1 auto',
            }}
        >
            {props.children}
        </Container>
    )
}

export default AuthPageContainer
