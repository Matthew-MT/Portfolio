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
});

export default responsiveFontSizes(theme, {
    factor: 4,
});
