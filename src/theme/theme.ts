import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 300,
    },
  },
  palette: {
    mode: "dark",
    primary: { main: "#121212" },
    secondary: { main: red[900] },
    action: {
      disabled: "red",
    },
  },
});
