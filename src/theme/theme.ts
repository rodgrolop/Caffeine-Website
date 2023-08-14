import { experimental_extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const theme = experimental_extendTheme({
    typography: {
        fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
            ','
        ),
        body2: {
            fontSize: '1rem',
            lineHeight: 1.5,
            fontWeight: 300,
        },
    },
    colorSchemes: {
        light: {
            palette: {
                primary: { main: '#121212' },
                secondary: { main: red[900] },
                action: {
                    disabled: 'white',
                },
            },
        },
        dark: {
            palette: {
                primary: { main: '#121212' },
                secondary: { main: red[900] },
                action: {
                    disabled: 'red',
                },
            },
        },
    },
})
