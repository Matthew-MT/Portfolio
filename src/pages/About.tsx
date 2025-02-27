// mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

// components
import ShowcaseCard from "../components/ShowcaseCard";

// assets
import WebDevelopment from "../assets/3-2-web-development-png-hd-2495354893.png";
import APIs from "../assets/Technology-528960878.png";
import Databases from "../assets/database-schema-1895779_960_720-3491758589.png";
import AWS from "../assets/amazon_web_services_73a55e2b43-154728351.png";
import GameDevelopment from "../assets/41285-1-game-controller-png-download-free-1989348200.png";
import Mobile from "../assets/mobile-dev-android-studio-apple-app-store.png";
import { useEnterFrameAnimation, useIsMobile } from "../config/utility";
import { Organization, SkillCategory } from "../config/data";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import useTheme from "@mui/material/styles/useTheme";
import Profile from "../assets/IMG_20250120_180742.jpg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

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
    const mobile = useIsMobile(theme);
    const animatorProps = useEnterFrameAnimation();
    const introAnimatorProps = useEnterFrameAnimation(undefined, 100);
    const valuesAnimatorProps = useEnterFrameAnimation(undefined, 300);
    const skillsAnimatorProps = useEnterFrameAnimation();
    const navigate = useNavigate();

    return <Stack
        {...animatorProps}
        direction="column"
        sx={{
            alignSelf: "center",
            marginTop: "calc(112px - 4rem)",
            width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
            padding: "min(4rem, 10vw)",
            alignItems: "center",
            gap: "128px",
        }}
    >
        <Stack
            component="section"
            direction="column"
            sx={{
                alignItems: "center",
                gap: "48px",
            }}
        >
            <Typography variant="h1" textAlign="center" >Hi. I'm Matthew.</Typography>
            <Stack
                {...introAnimatorProps}
                direction="row"
                sx={{
                    gap: "4rem",
                    maxWidth: "80vw",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                    [`@media only screen and (max-width: ${theme.breakpoints.values.xl}px)`]: {
                        // textAlign: "center",
                        flexWrap: "wrap",
                    },
                }}
            >
                <img
                    style={{
                        flexGrow: 0,
                        height: "min(32rem, 80vw)",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        objectPosition: "center top",
                        borderRadius: "50%",
                    }}
                    src={Profile}
                />
                <Stack
                    direction="column"
                    sx={{
                        gap: "2rem",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography variant="h4" >I am a full-stack software engineer with 3 years of experience in technologies such as React, AWS, Databases, and Linux.</Typography>
                        <Typography>
                            <br />
                            I've worked in several different environments, including large cross-functional teams at Amazon.com and as the sole developer at MORR LLC. I also have a Bachelor's in Computer Science and a Bachelor's in Mathematics, making me uniquely strong in mathematical inquiry, research, and problem-solving.
                            <br /><br />
                            And I love solving problems. From math problems to features, my favorite hobby is to sit down with a good snack and iterate on a clean, elegant solution, and to see the impact that solution makes.
                            <br /><br />
                            Let's collaborate.
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
        <Stack
            {...valuesAnimatorProps}
            component="section"
            direction="column"
            sx={{
                alignItems: "center",
                gap: "48px",
            }}
        >
            <Typography variant="h1" textAlign="center" >My Values</Typography>
            <Grid
                container
                sx={{
                    alignSelf: "center",
                    backgroundColor: "#02737340",
                    backgroundFilter: "blur(20px) saturate(1.6)",
                    width: "min(84vw, 72rem)",
                    padding: "min(7vw, 6rem)",
                    borderRadius: "min(14vw, 6rem)",
                }}
                spacing="min(7vw, 6rem)"
            >
                <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: mobile ? "center" : "right" }} >
                    <Typography variant="h3">Quality</Typography>
                </Grid>
                <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: "left" }} >
                    <Typography>Quality is not just about getting it right the first time, it's also about continually iterating to develop better solutions.</Typography>
                </Grid>
                <Grid size={12} ><Divider /></Grid>
                {(mobile ? Array.prototype.reverse : Array.prototype.slice).call([
                    <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: "left" }} >
                        <Typography>Communication means understanding. Understanding means comprehensive knowledge of the feature or problem.</Typography>
                    </Grid>,
                    <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: mobile ? "center" : "left" }} >
                        <Typography variant="h3">Communication</Typography>
                    </Grid>,
                ])}
                <Grid size={12} ><Divider /></Grid>
                <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: mobile ? "center" : "right" }} >
                    <Typography variant="h3">Inclusion</Typography>
                </Grid>
                <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: "left" }} >
                    <Typography>It's critical to include all stakeholders in the conversation. Incorporating diverse client perspectives can make or break a solution.</Typography>
                </Grid>
                <Grid size={12} ><Divider /></Grid>
                {(mobile ? Array.prototype.reverse : Array.prototype.slice).call([
                    <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: "left" }} >
                        <Typography>It isn't enough to memorize formulas in an ever-changing world. Being open to learning and growing is crucial.</Typography>
                    </Grid>,
                    <Grid container size={{ xs: 12, md: 6 }} sx={{ justifyContent: mobile ? "center" : "left" }} >
                        <Typography variant="h3">Learning</Typography>
                    </Grid>,
                ])}
            </Grid>
        </Stack>
        <Stack
            {...skillsAnimatorProps}
            component="section"
            direction="column"
            sx={{
                alignItems: "center",
                gap: "48px",
            }}
        >
            <Typography variant="h1" textAlign="center" >My Skills</Typography>
            <Grid
                container
                spacing={12}
            >
                <Grid size={{ xs: 12, xl: 8 }}>
                    <ShowcaseCard
                        animateIn
                        delay={100}
                        title="Web Development"
                        image={WebDevelopment}
                        sx={{
                            backgroundColor: "#5FCDD9",
                            height: "min(20rem, 64vw)",
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
                        delay={100}
                        title="APIs"
                        image={APIs}
                        sx={{
                            backgroundColor: "#027373",
                            height: "min(20rem, 64vw)",
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
                        delay={100}
                        title="Databases"
                        image={Databases}
                        sx={{
                            backgroundColor: "#04BFAD",
                            height: "min(20rem, 64vw)",
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
                        delay={100}
                        title="AWS"
                        image={AWS}
                        sx={{
                            backgroundColor: "#172026",
                            height: "min(20rem, 64vw)",
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
                        delay={100}
                        title="Game Development"
                        image={GameDevelopment}
                        sx={{
                            backgroundColor: "#027373",
                            height: "min(20rem, 64vw)",
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
                        delay={100}
                        title="Mobile"
                        image={Mobile}
                        sx={{
                            backgroundColor: "#04BF9D",
                            height: "min(20rem, 64vw)",
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
