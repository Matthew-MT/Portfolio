import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

const theme = createTheme({
    // colorSchemes: {
    //     dark: true,
    // },
    typography: {
        overline: {
            fontSize: "1rem",
        },
        body1: {
            fontSize: "1.25rem",
        },
    },
    palette: {
        contrastThreshold: 4.5,
        primary: { main: "#027373" },
        secondary: { main: "#172026" },
        info: { main: "#5FCDD9" },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#023773ff",
                },
            },
        },
    },
});

export default responsiveFontSizes(theme, {
    factor: 4,
});
