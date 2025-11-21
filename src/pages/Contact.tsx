import { NavLink } from "react-router";

// mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useEnterFrameAnimation } from "../config/utility";
import Link from "@mui/material/Link";

// assets

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export default function About() {
    const theme = useTheme();
    const animatorProps = useEnterFrameAnimation();
    const contactAnimatorProps = useEnterFrameAnimation(undefined, 100);

    return <Stack
        {...animatorProps}
        direction="column"
        sx={{
            alignSelf: "center",
            width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
            marginTop: "calc(112px - 4rem)",
            padding: "min(4rem, 10vw)",
            alignItems: "center",
            gap: "48px",
        }}
    >
        <Typography variant="h1" textAlign="center" >Contact Information</Typography>
        <Stack
            {...contactAnimatorProps}
            direction="column"
            sx={{
                backgroundColor: "#02737340",
                borderRadius: "1.5rem",
                padding: "1rem 1.6rem",
            }}
        >
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    gap: theme.spacing(8),
                }}
            >
                <Typography variant="body1">Email:</Typography>
                <Link component={NavLink} variant="body1" to="mailto:mmontonitiller@gmail.com" >mmontonitiller@gmail.com</Link>
            </Stack>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    gap: theme.spacing(8),
                }}
            >
                <Typography variant="body1">Phone:</Typography>
                <Link component={NavLink} variant="body1" to="tel:+15402090928" >(540) 209-0928</Link>
            </Stack>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    gap: theme.spacing(8),
                }}
            >
                <Typography variant="body1">LinkedIn:</Typography>
                <Link component={NavLink} variant="body1" to="https://www.linkedin.com/in/matthew-montoni-tiller/" >in/matthew-montoni-tiller</Link>
            </Stack>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    gap: theme.spacing(8),
                }}
            >
                <Typography variant="body1">GitHub:</Typography>
                <Link component={NavLink} variant="body1" to="https://github.com/Matthew-MT" >github.com/Matthew-MT</Link>
            </Stack>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    gap: theme.spacing(8),
                }}
            >
                <Typography variant="body1">Portfolio:</Typography>
                <Typography variant="body1"><Link component={NavLink} to="https://github.com/Matthew-MT/Portfolio" >The code for this website! (GitHub)</Link></Typography>
            </Stack>
        </Stack>
    </Stack>;
}
