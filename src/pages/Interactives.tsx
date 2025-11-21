import Stack from "@mui/material/Stack";
import { URL_REGEX, useEnterFrameAnimation, useIsMobile } from "../config/utility";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink, Route, Routes, useLocation } from "react-router";
import Box from "@mui/material/Box";

export default function Interactives() {
    // hooks
    const location = useLocation();
    const theme = useTheme();
    const mobile = useIsMobile(theme);
    const mainAnimatorProps = useEnterFrameAnimation();
    const interactiveAnimatorProps = useEnterFrameAnimation(undefined, 100);

    return <Stack
        {...mainAnimatorProps}
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
        <Typography variant="h1" >Interactives</Typography>
        <Stack
            {...interactiveAnimatorProps}
            direction={mobile ? "column" : "row"}
            spacing={1}
            sx={{
                backgroundColor: "#02737340",
                width: "min(48rem, 100%)",
                borderRadius: "1.5rem",
                padding: "1rem 1.6rem",
                alignItems: mobile ? "center" : "flex-start",
            }}
        >
            <Tabs
                orientation={mobile ? undefined : "vertical"}
                variant="scrollable"
                value={location.pathname.match(URL_REGEX)?.slice(0, 2).join("")}
            >
                <Tab
                    component={NavLink}
                    label="Graphing Calculator"
                    value="/interactives"
                    to="/interactives"
                />
                <Tab
                    component={NavLink}
                    label="3D Sculptor"
                    value="/interactives/3d-sculptor"
                    to="/interactives/3d-sculptor"
                />
            </Tabs>
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: 1,
                    backgroundColor: "white",
                }}
            >
                <Routes>
                    <Route index element={<div style={{ color: "black" }} >Hello?</div>} />
                </Routes>
            </Box>
        </Stack>
    </Stack>;
}
