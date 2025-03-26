import Stack from "@mui/material/Stack";
import { useEnterFrameAnimation } from "../config/utility";
import useTheme from "@mui/material/styles/useTheme";

export default function Projects() {
    const theme = useTheme();
    const mainAnimatorProps = useEnterFrameAnimation();

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
    ></Stack>;
}