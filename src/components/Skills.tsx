import Stack, { StackProps } from "@mui/material/Stack";
import { Organization, SkillCategory, skills } from "../config/data";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import { useEnterFrameAnimation, useIsMobile } from "../config/utility";
import SkillsList from "./SkillsList";
import LinearProgress from "@mui/material/LinearProgress";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export interface SkillsProps {
    show: boolean;
    onSetShow: (value: boolean) => void;
    skillsRef: MutableRefObject<HTMLElement | null>;
    shownExperiences: Organization[];
    setShownExperiences: Dispatch<SetStateAction<Organization[]>>;
    miscellaneousExperiences: boolean;
    setMiscellaneousExperiences: Dispatch<SetStateAction<boolean>>;
    shownSkillCategories: SkillCategory[];
    setShownSkillCategories: Dispatch<SetStateAction<SkillCategory[]>>;
    miscellaneousSkills: boolean;
    setMiscellaneousSkills: Dispatch<SetStateAction<boolean>>;
};

const experienceCheckboxLabels = Object.values(Organization).sort();
const skillCategoryCheckboxLabels = Object.values(SkillCategory).sort();

export default function Skills({
    show,
    onSetShow,
    skillsRef,
    shownExperiences,
    setShownExperiences,
    miscellaneousExperiences,
    setMiscellaneousExperiences,
    shownSkillCategories,
    setShownSkillCategories,
    miscellaneousSkills,
    setMiscellaneousSkills,
    ...props//
}: StackProps & SkillsProps) {
    const theme = useTheme();
    const mobile = useIsMobile(theme);
    const skillsAnimatorProps = useEnterFrameAnimation(instance => {
        skillsRef.current = instance;
        if (window.location.hash === "#Skills") window.scrollTo({ top: (instance?.getBoundingClientRect().top ?? 0) + document.documentElement.scrollTop });
    }, 100);

    const [filter, setFilter] = useState<boolean>(window.scrollY >= (skillsRef.current?.getBoundingClientRect().top ?? 0));

    useEffect(() => {
        function handleScroll() { setFilter(window.scrollY >= (skillsRef.current?.getBoundingClientRect().top ?? 0)); }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [skillsRef]);

    return <Stack
        {...props}
        {...skillsAnimatorProps}
        direction="row"
        sx={{
            width: "100%",
            gap: "2rem",
        }}
    >
        <Stack
            direction="column"
            spacing={1}
            sx={{
                flexGrow: 1,
            }}
        >
            {skills.filter(
                skill =>
                ((shownExperiences.length === 0 && !miscellaneousExperiences) || (skill.experiences.length === 0 && miscellaneousExperiences) || skill.experiences.some(experience => shownExperiences.includes(experience)))
                && ((shownSkillCategories.length === 0 && !miscellaneousSkills) || (skill.categories.length === 0 && miscellaneousSkills) || skill.categories.some(category => shownSkillCategories.includes(category)))
            ).map(skill => <ShowcaseCard
                hoverable={false}
                variant="h5"
                sx={{
                    boxSizing: "border-box",
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "1.5rem",
                    padding: "1rem 1.6rem",
                }}
                title={skill.label}
            >
                <Stack
                    sx={{
                        width: "100%",
                        gap: "0.5rem",
                    }}
                >
                    <Stack
                        direction={mobile ? "column" : "row"}
                        sx={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h6">From: {skill.experiences.length ? skill.experiences.join(", ") : "Miscellaneous"}</Typography>
                        <SkillsList list={skill.categories} />
                    </Stack>
                    <Stack
                        sx={{
                            gap: "0.5rem",
                            bgcolor: "#02737396",
                            padding: "8px 16px",
                        }}
                    >
                        <Typography variant="h6">Skill Proficiency:</Typography>
                        <LinearProgress
                            variant="determinate"
                            sx={{
                                width: "100%",
                            }}
                            value={skill.proficiency}
                        />
                        <Stack
                            direction="row"
                            sx={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Stack
                                sx={{
                                    alignItems: "start",
                                    width: "0px",
                                    textWrap: "nowrap",
                                }}
                            >
                                <Box sx={{ bgcolor: theme.palette.primary.main, width: "8px", height: "8px", borderRadius: "4px" }} />
                                {!mobile && <Typography variant="body2" >Saw a Video</Typography>}
                            </Stack>
                            <Stack
                                sx={{
                                    alignItems: "center",
                                    width: "0px",
                                    textWrap: "nowrap",
                                }}
                            >
                                <Box sx={{ bgcolor: skill.proficiency >= 25 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                {!mobile && <Typography variant="body2" >Deployed a Project</Typography>}
                            </Stack>
                            <Stack
                                sx={{
                                    alignItems: "center",
                                    width: "0px",
                                    textWrap: "nowrap",
                                }}
                            >
                                <Box sx={{ bgcolor: skill.proficiency >= 50 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                {!mobile && <Typography variant="body2" >Comfortable</Typography>}
                            </Stack>
                            <Stack
                                sx={{
                                    alignItems: "center",
                                    width: "0px",
                                    textWrap: "nowrap",
                                }}
                            >
                                <Box sx={{ bgcolor: skill.proficiency >= 75 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                {!mobile && <Typography variant="body2" >Used Frequently</Typography>}
                            </Stack>
                            <Stack
                                sx={{
                                    alignItems: "end",
                                    width: "0px",
                                    textWrap: "nowrap",
                                }}
                            >
                                <Box sx={{ bgcolor: skill.proficiency >= 100 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                {!mobile && <Typography variant="body2" >Legendary</Typography>}
                            </Stack>
                        </Stack>
                    </Stack>
                    {skill.description}
                </Stack>
            </ShowcaseCard>)}
        </Stack>
        {mobile && <Fade in={filter} >
            <Fab
                sx={{
                    position: "fixed",
                    bottom: mobile ? 16 : 48,
                    left: `min(calc(100vw - 72px), calc(calc(calc(100vw + ${theme.breakpoints.values.xl}px) / 2) + 4rem))`,
                }}
                onClick={() => onSetShow(true)}
            >
                <FilterAltIcon />
            </Fab>
        </Fade>}
        <Drawer
            anchor="right"
            open={show}
            onClose={() => onSetShow(false)}
            sx={{
                "& > .MuiPaper-root": {
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    alignItems: "start",
                },
            }}
        >
            <IconButton
                onClick={() => onSetShow(false)}
            >
                <CloseIcon />
            </IconButton>
            <FormControlLabel
                label="Experiences"
                control={<Checkbox
                    checked={miscellaneousExperiences && shownExperiences.length === Object.values(Organization).length}
                    indeterminate={(miscellaneousExperiences || shownExperiences.length > 0) && (!miscellaneousExperiences || shownExperiences.length < Object.values(Organization).length)}
                    onChange={() => setShownExperiences(previous => {
                        const all = Object.values(Organization);
                        if (previous.length === all.length) {
                            setMiscellaneousExperiences(false);
                            return [];
                        } else {
                            setMiscellaneousExperiences(true);
                            return [...all];
                        }
                    })}
                />}
            />
            <Stack
                direction="column"
                sx={{
                    ml: 3,
                }}
            >
                {experienceCheckboxLabels.map((organization, index) => <FormControlLabel
                    key={index}
                    label={organization}
                    control={<Checkbox
                        checked={shownExperiences.includes(organization)}
                        onChange={() => setShownExperiences(previous => {
                            if (previous.includes(organization)) return previous.filter(o => o !== organization);
                            else return [...previous, organization];
                        })}
                    />}
                />)}
                <FormControlLabel
                    label="Miscellaneous"
                    control={<Checkbox
                        checked={miscellaneousExperiences}
                        onChange={() => setMiscellaneousExperiences(previous => !previous)}
                    />}
                />
            </Stack>
            <FormControlLabel
                label="Skill Categories"
                control={<Checkbox
                    checked={miscellaneousSkills && shownSkillCategories.length === Object.values(SkillCategory).length}
                    indeterminate={(miscellaneousSkills || shownSkillCategories.length > 0) && (!miscellaneousSkills || shownSkillCategories.length < Object.values(SkillCategory).length)}
                    onChange={() => setShownSkillCategories(previous => {
                        const all = Object.values(SkillCategory);
                        if (previous.length === all.length) {
                            setMiscellaneousSkills(false);
                            return [];
                        } else {
                            setMiscellaneousSkills(true);
                            return [...all];
                        }
                    })}
                />}
            />
            <Stack
                direction="column"
                sx={{
                    ml: 3,
                }}
            >
                {skillCategoryCheckboxLabels.map((skillCategory, index) => <FormControlLabel
                    key={index}
                    label={skillCategory}
                    control={<Checkbox
                        checked={shownSkillCategories.includes(skillCategory)}
                        onChange={() => setShownSkillCategories(previous => {
                            if (previous.includes(skillCategory)) return previous.filter(o => o !== skillCategory);
                            else return [...previous, skillCategory];
                        })}
                    />}
                />)}
                <FormControlLabel
                    label="Miscellaneous"
                    control={<Checkbox
                        checked={miscellaneousSkills}
                        onChange={() => setMiscellaneousSkills(previous => !previous)}
                    />}
                />
            </Stack>
        </Drawer>
    </Stack>;
}
