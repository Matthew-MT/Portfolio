import { useEffect, useState } from "react";
import "./App.css";
import donut from "./assets/donut_1.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navigation from "./components/Navigation";
import Grid from "@mui/material/Grid2";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export default function App() {
    return <Stack
        direction="column"
        sx={{
            backgroundImage: "linear-gradient(120deg, #5FCDD9 0%, #04BF9D 10%, #04BFAD 40%, #172026 65%)",
            backgroundAttachment: "fixed",
        }}
    >
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "72vh",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${donut})`,
            }}
        >
            <Navigation sx={{ marginTop: "32px" }} />
        </Box>
        <Stack
            direction="column"
            sx={{
                alignSelf: "center",
                padding: "4rem",
                width: "min(80vw, 1600px)",
                rowGap: "48px",
            }}
        >
            <Stack
                direction="column"
            >
                <Stack
                    direction="row"
                    sx={{
                        flexWrap: "wrap",
                        columnGap: "38px",
                    }}
                >
                    <Typography fontSize="8rem" lineHeight="1.2em">Matthew</Typography><Typography fontSize="8rem" lineHeight="1.2em">Montoni-Tiller.</Typography>
                </Stack>
                <Typography fontSize="8rem" lineHeight="1.2em">Software Engineer.</Typography>
            </Stack>
            <Grid
                container
                spacing={12}
            >
                <Grid flexGrow={1}>
                    <Stack
                        sx={theme => ({
                            borderRadius: "4rem",
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            color: theme.palette.getContrastText("#fff"),
                            height: "32rem",
                        })}
                    >
                        <Typography>Box A</Typography>
                    </Stack>
                </Grid>
                <Grid width="32rem">
                    <Stack
                        sx={theme => ({
                            borderRadius: "4rem",
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            color: theme.palette.getContrastText("#fff"),
                            height: "32rem",
                        })}
                    >
                        <Typography>Box B</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </Stack>;
}
