// mui
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export default function Work() {
    const theme = useTheme();

    return <Stack
        direction="column"
        sx={{
            backgroundImage: "linear-gradient(120deg, #5FCDD9 0%, #04BF9D 10%, #04BFAD 40%, #172026 65%)",
            backgroundAttachment: "fixed",
            minHeight: "100%",
        }}
    >
        <Stack
            direction="column"
            sx={{
                alignSelf: "center",
                padding: "4rem",
                width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
                rowGap: "48px",
            }}
        >
        </Stack>
    </Stack>;
}
