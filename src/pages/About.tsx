// mui
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import useTheme from "@mui/material/styles/useTheme";

// components
import ShowcaseCard from "../components/ShowcaseCard";

// assets
import Banner from "../assets/banner-1500x630-2809715463.jpg";
import WebDevelopment from "../assets/3-2-web-development-png-hd-2495354893.png";
import APIs from "../assets/Technology-528960878.png";
import Databases from "../assets/database-schema-1895779_960_720-3491758589.png";
import AWS from "../assets/amazon_web_services_73a55e2b43-154728351.png";
import GameDevelopment from "../assets/41285-1-game-controller-png-download-free-1989348200.png";
import Mobile from "../assets/mobile-dev-android-studio-apple-app-store.png";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export default function About() {
    const theme = useTheme();

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
                height: "64vh",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${Banner})`,
            }}
        />
        <Stack
            direction="column"
            sx={{
                alignSelf: "center",
                padding: "4rem",
                width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
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
                <Typography variant="h5">I'm enthusiastic to solve complex problems and deliver powerful features that delight users.</Typography>
            </Stack>
            <Grid
                container
                spacing={12}
            >
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        title="Web Development"
                        image={WebDevelopment}
                        sx={{
                            backgroundColor: "#5FCDD9",
                            height: "24rem",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        title="APIs"
                        image={APIs}
                        sx={{
                            backgroundColor: "#027373",
                            height: "24rem",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        title="Databases"
                        image={Databases}
                        sx={{
                            backgroundColor: "#04BFAD",
                            height: "24rem",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        title="AWS"
                        image={AWS}
                        sx={{
                            backgroundColor: "#172026",
                            height: "24rem",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        title="Game Development"
                        image={GameDevelopment}
                        sx={{
                            backgroundColor: "#027373",
                            height: "24rem",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        title="Mobile"
                        image={Mobile}
                        sx={{
                            backgroundColor: "#04BF9D",
                            height: "24rem",
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    </Stack>;
}
