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
import { useEnterFrameAnimation } from "../utility";
import { Organization, SkillCategory } from "../config/data";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export interface AboutProps {
    setShownExperiences: Dispatch<SetStateAction<Organization[]>>;
    setMiscellaneousExperiences: Dispatch<SetStateAction<boolean>>;
    setShownSkillCategories: Dispatch<SetStateAction<SkillCategory[]>>;
    setMiscellaneousSkills: Dispatch<SetStateAction<boolean>>;
};

export default function About({
    setShownExperiences,
    setMiscellaneousExperiences,
    setShownSkillCategories,
    setMiscellaneousSkills,
}: AboutProps) {
    const theme = useTheme();
    const animatorProps = useEnterFrameAnimation();
    const navigate = useNavigate();

    return <Stack
        direction="column"
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
                {...animatorProps}
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
                        animateIn
                        delay={200}
                        title="Web Development"
                        image={WebDevelopment}
                        sx={{
                            backgroundColor: "#5FCDD9",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.WEB]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        animateIn
                        delay={200}
                        title="APIs"
                        image={APIs}
                        sx={{
                            backgroundColor: "#027373",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.APIS]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        animateIn
                        delay={200}
                        title="Databases"
                        image={Databases}
                        sx={{
                            backgroundColor: "#04BFAD",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.DATABASES]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        animateIn
                        delay={200}
                        title="AWS"
                        image={AWS}
                        sx={{
                            backgroundColor: "#172026",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.AWS]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        animateIn
                        delay={200}
                        title="Game Development"
                        image={GameDevelopment}
                        sx={{
                            backgroundColor: "#027373",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.GAMES]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, xl: 4 }}>
                    <ShowcaseCard
                        animateIn
                        delay={200}
                        title="Mobile"
                        image={Mobile}
                        sx={{
                            backgroundColor: "#04BF9D",
                            height: "24rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setShownExperiences(Object.values(Organization));
                            setMiscellaneousExperiences(true);
                            setShownSkillCategories([SkillCategory.MOBILE]);
                            setMiscellaneousSkills(false);
                            navigate("/work#Skills");
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    </Stack>;
}
