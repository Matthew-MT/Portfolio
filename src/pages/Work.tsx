// mui
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Organization, SkillCategory } from "../config/data";
import { useEnterFrameAnimation, useIsMobile } from "../config/utility";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import Skills from "../components/Skills";
import Resume from "../components/Resume";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

export interface WorkProps {
    shownExperiences: Organization[];
    setShownExperiences: Dispatch<SetStateAction<Organization[]>>;
    miscellaneousExperiences: boolean;
    setMiscellaneousExperiences: Dispatch<SetStateAction<boolean>>;
    shownSkillCategories: SkillCategory[];
    setShownSkillCategories: Dispatch<SetStateAction<SkillCategory[]>>;
    miscellaneousSkills: boolean;
    setMiscellaneousSkills: Dispatch<SetStateAction<boolean>>;
};

export default function Work({
    shownExperiences,
    setShownExperiences,
    miscellaneousExperiences,
    setMiscellaneousExperiences,
    shownSkillCategories,
    setShownSkillCategories,
    miscellaneousSkills,
    setMiscellaneousSkills,
}: WorkProps) {
    const theme = useTheme();
    const mobile = useIsMobile(theme);
    const resumeRef = useRef<HTMLElement | null>(null);
    const skillsRef = useRef<HTMLElement | null>(null);
    const mainAnimatorProps = useEnterFrameAnimation();

    const [showFilters, setShowFilters] = useState<boolean>(false);

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
        <Typography id="Resume" variant="h1" textAlign="center" >My Work</Typography>
        <Resume
            resumeRef={resumeRef}
            skillsRef={skillsRef}
            setShownExperiences={setShownExperiences}
            setMiscellaneousExperiences={setMiscellaneousExperiences}
            setShownSkillCategories={setShownSkillCategories}
            setMiscellaneousSkills={setMiscellaneousSkills}
        />
        <Stack
            direction="row"
            sx={{
                gap: "2rem",
                alignItems: "center",
            }}
        >
            <Typography id="Skills" variant="h1" textAlign="center" >My Skills</Typography>
            {!mobile && <Button
                size="large"
                variant="contained"
                color="info"
                startIcon={<FilterAltIcon />}
                onClick={() => setShowFilters(true)}
            >
                Filter
            </Button>}
        </Stack>
        <Skills
            show={showFilters}
            onSetShow={setShowFilters}
            skillsRef={skillsRef}
            shownExperiences={shownExperiences}
            setShownExperiences={setShownExperiences}
            miscellaneousExperiences={miscellaneousExperiences}
            setMiscellaneousExperiences={setMiscellaneousExperiences}
            shownSkillCategories={shownSkillCategories}
            setShownSkillCategories={setShownSkillCategories}
            miscellaneousSkills={miscellaneousSkills}
            setMiscellaneousSkills={setMiscellaneousSkills}
        />
    </Stack>;
}
