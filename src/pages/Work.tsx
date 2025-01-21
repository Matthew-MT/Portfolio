// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import ShowcaseCard from "../components/ShowcaseCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import { experiences, Organization, SkillCategory, skills } from "../config/data";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SkillsList from "../components/SkillsList";
import { useEnterFrameAnimation } from "../utility";
import LinearProgress from "@mui/material/LinearProgress";

// #172026
// #5FCDD9
// #027373
// #04BFAD
// #04BF9D

const colors = [
    "#172026",
    "#5FCDD9",
    "#027373",
    "#04BFAD",
    "#04BF9D",
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const now = new Date();
const months = ((now.getFullYear() - 2019) * 12) + (now.getMonth() - 7);
const labels = (new Array(months - 1)).fill(0).map((_, index) => {
    const date = new Date(now);
    date.setMonth(date.getMonth() - index);
    // January shouldn't show up because the number representing the year represents it.
    if (date.getMonth() === 0) return date.getFullYear();
    return monthNames[date.getMonth()];
});

const experienceCheckboxLabels = Object.values(Organization).sort();
const skillCategoryCheckboxLabels = Object.values(SkillCategory).sort();

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
    const resumeRef = useRef<HTMLElement | null>(null);
    const skillsRef = useRef<HTMLElement | null>(null);

    const [showInfo, setShowInfo] = useState<boolean>(true);

    const mainAnimatorProps = useEnterFrameAnimation();
    const resumeAnimatorProps = useEnterFrameAnimation(instance => {
        resumeRef.current = instance;
        if (window.location.hash === "#Resume") window.scrollTo({ top: (instance?.getBoundingClientRect().top || 0) + document.documentElement.scrollTop });
    }, 200);
    const skillsAnimatorProps = useEnterFrameAnimation(instance => {
        skillsRef.current = instance;
        if (window.location.hash === "#Skills") window.scrollTo({ top: (instance?.getBoundingClientRect().top || 0) + document.documentElement.scrollTop });
    }, 100);

    return <Stack
        {...mainAnimatorProps}
        direction="column"
        sx={{
            alignSelf: "center",
            width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
            marginTop: "calc(112px - 4rem)",
            padding: "4rem",
            alignItems: "center",
            gap: "48px",
        }}
    >
        <Typography variant="h1" >My Work</Typography>
        <Stack
            {...resumeAnimatorProps}
            id="Resume"
            direction="column"
            sx={{
                gap: "24px",
            }}
        >
            {showInfo && <Alert
                variant="filled"
                severity="info"
                onClose={() => setShowInfo(false)}
            >
                Hover an item to learn more.
            </Alert>}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "4fr 1fr 4fr",
                    gridTemplateRows: `repeat(${months}, 2rem)`,
                    columnGap: "1rem",
                }}
            >
                {labels.map((label, index) => <Box
                    sx={{
                        gridRow: `${index + 1} / span 1`,
                        gridColumn: "2 / span 1",
                        display: "flex",
                        flexDirection: "column",
                        borderTopLeftRadius: index === 0 ? "1rem" : undefined,
                        borderTopRightRadius: index === 0 ? "1rem" : undefined,
                        borderTop: index === 0 ? `1px solid ${theme.palette.grey[900]}` : undefined,
                        borderLeft: `1px solid ${theme.palette.grey[900]}`,
                        borderRight: `1px solid ${theme.palette.grey[900]}`,
                        justifyContent: "end",
                        paddingX: "0.5rem",
                    }}
                >
                    <Divider
                        sx={{
                            height: "1.5rem",
                            lineHeight: "1.5rem",
                            marginTop: "-0.75rem",
                            marginBottom: "-0.75rem",
                            color: typeof label === "number" ? theme.palette.grey[900] : theme.palette.grey[800],
                            "&::before, &::after": { borderColor: "currentcolor" },
                        }}
                    >
                        <Typography
                            variant={typeof label === "number" ? "body1" : "body2"}
                        >
                            {label}
                        </Typography>
                    </Divider>
                </Box>)}
                <Box
                    sx={{
                        gridRow: `${months} / span 1`,
                        gridColumn: "2 / span 1",
                        display: "flex",
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                        borderBottom: `1px solid ${theme.palette.grey[600]}`,
                        borderLeft: `1px solid ${theme.palette.grey[600]}`,
                        borderRight: `1px solid ${theme.palette.grey[600]}`,
                        mixBlendMode: "difference",
                    }}
                />
                {experiences.map((experience, index) => {
                    const
                        start = new Date(now),
                        end = new Date(now);

                    start.setMonth(start.getMonth() - (months - experience.start));
                    end.setMonth(end.getMonth() - (experience.end === undefined ? 0 : months - experience.end));

                    return <Box
                        sx={{
                            gridRow: `${(months - (experience.end || months)) + 1} / span ${((experience.end === undefined ? months : experience.end) - experience.start) + 1}`,
                            gridColumn: `${experience.side === "left" ? 1 : 3} / span 1`,
                            zIndex: experiences.length - index,
                            "&:hover": {
                                zIndex: experiences.length + 1,
                            },
                        }}
                    >
                        <ShowcaseCard
                            variant="h5"
                            sx={{
                                boxSizing: "border-box",
                                backgroundColor: colors[index % 5],
                                borderRadius: "1.5rem",
                                height: "100%",
                                padding: "1rem 1.6rem",
                                gap: "0.5rem",
                                cursor: "pointer",
                                "&:hover": {
                                    height: "max-content",
                                    minHeight: "100%",
                                },
                            }}
                            title={experience.label}
                            onClick={() => {
                                setShownExperiences([experience.organization]);
                                setMiscellaneousExperiences(false);
                                setShownSkillCategories(Object.values(SkillCategory));
                                setMiscellaneousSkills(true);
                                window.scrollTo({ top: (skillsRef.current?.getBoundingClientRect().top || 0) + document.documentElement.scrollTop });
                            }}
                        >
                            <Stack
                                direction="column"
                                sx={{
                                    width: "100%",
                                    gap: "0.4rem",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6">{experience.organization}</Typography>
                                    <Typography variant="subtitle2">{monthNames[start.getMonth()]} {start.getFullYear()} - {experience.end === undefined ? "Present" : `${monthNames[end.getMonth()]} ${end.getFullYear()}`}</Typography>
                                </Stack>
                                <Divider sx={{ backgroundColor: "currentcolor" }} />
                                <Typography variant="body2">{experience.description}</Typography>
                            </Stack>
                        </ShowcaseCard>
                    </Box>;
                })}
            </Box>
        </Stack>
        <Typography variant="h1" >My Skills</Typography>
        <Stack
            {...skillsAnimatorProps}
            id="Skills"
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
                            direction="row"
                            sx={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
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
                                    <Typography variant="body2" >Saw a Video</Typography>
                                </Stack>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        width: "0px",
                                        textWrap: "nowrap",
                                    }}
                                >
                                    <Box sx={{ bgcolor: skill.proficiency >= 25 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                    <Typography variant="body2" >Deployed a Project</Typography>
                                </Stack>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        width: "0px",
                                        textWrap: "nowrap",
                                    }}
                                >
                                    <Box sx={{ bgcolor: skill.proficiency >= 50 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                    <Typography variant="body2" >Comfortable</Typography>
                                </Stack>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        width: "0px",
                                        textWrap: "nowrap",
                                    }}
                                >
                                    <Box sx={{ bgcolor: skill.proficiency >= 75 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                    <Typography variant="body2" >Used Frequently</Typography>
                                </Stack>
                                <Stack
                                    sx={{
                                        alignItems: "end",
                                        width: "0px",
                                        textWrap: "nowrap",
                                    }}
                                >
                                    <Box sx={{ bgcolor: skill.proficiency >= 100 ? theme.palette.primary.main : theme.palette.grey[200], width: "8px", height: "8px", borderRadius: "4px" }} />
                                    <Typography variant="body2" >Legendary</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        {skill.description}
                    </Stack>
                </ShowcaseCard>)}
            </Stack>
            <Paper
                square
                sx={{
                    position: "sticky",
                    top: 0,
                    maxHeight: "100vh",
                    overflowY: "auto",
                    padding: "1rem",
                    height: "max-content",
                }}
            >
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
                    {experienceCheckboxLabels.map(organization => <FormControlLabel
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
                    {skillCategoryCheckboxLabels.map(skillCategory => <FormControlLabel
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
            </Paper>
        </Stack>
    </Stack>;
}
