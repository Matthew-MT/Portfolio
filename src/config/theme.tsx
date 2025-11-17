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
        secondary: { main: "#04BF9D" },
        info: { main: "#5FCDD9" },
    },
    // components: {
    //     MuiButton: {
    //         variants: [
    //             {
    //                 props: { variant: "contained" },
    //                 style: {
    //                     backgroundColor: "#027373",
    //                 },
    //             },
    //         ],
    //     },
    //     MuiChip: {
    //         variants: [
    //             {
    //                 props: { variant: "filled" },
    //                 style: {
    //                     backgroundColor: "#027373",
    //                 },
    //             },
    //         ],
    //     },
    // },
});

export default responsiveFontSizes(theme, {
    factor: 4,
});
