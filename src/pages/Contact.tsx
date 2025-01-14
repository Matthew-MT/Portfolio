import { NavLink } from "react-router";

// mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useEnterFrameAnimation } from "../utility";

// assets

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export default function About() {
    const theme = useTheme();
    const animatorProps = useEnterFrameAnimation();

    return <Stack
        {...animatorProps}
        direction="column"
    >
        <Stack
            direction="column"
            sx={{
                alignSelf: "center",
                marginTop: "calc(112px - 4rem)",
                padding: "4rem",
                width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
                flexGrow: 1,
                rowGap: "48px",
            }}
        >
            <Typography variant="h1">Contact Information</Typography>
            <Stack
                direction="column"
            >
                <Typography variant="body1">Email: <NavLink to="mailto:mmontonitiller@gmail.com">mmontonitiller@gmail.com</NavLink></Typography>
                <Typography variant="body1">Phone: <NavLink to="tel:+15402090928">(540) 209-0928</NavLink></Typography>
                <Typography variant="body1">LinkedIn: <NavLink to="https://www.linkedin.com/in/matthew-montoni-tiller/">in/matthew-montoni-tiller</NavLink></Typography>
                <Typography variant="body1">GitHub: <NavLink to="https://github.com/Matthew-MT">github.com/Matthew-MT</NavLink></Typography>
                <Typography variant="body1">Portfolio: <NavLink to="https://github.com/Matthew-MT/Portfolio">The code for this website! (GitHub)</NavLink></Typography>
            </Stack>
        </Stack>
    </Stack>;
}
