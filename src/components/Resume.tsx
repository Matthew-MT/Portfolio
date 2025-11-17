import { Dispatch, MutableRefObject, RefObject, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Stack, { StackProps } from "@mui/material/Stack";
import { useEnterFrameAnimation, useIsMobile } from "../config/utility";
import useTheme from "@mui/material/styles/useTheme";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import { experiences, Organization, WorkExperience } from "../config/data";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const now = new Date();
const months = ((now.getFullYear() - 2019) * 12) + (now.getMonth() - 7);

function getLabel(month: number) {
    const date = new Date(now);
    date.setMonth(date.getMonth() - (months - month));
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export interface ResumeProps {
    resumeRef: MutableRefObject<HTMLElement | null>;
    skillsRef: RefObject<HTMLElement | null>;
    setShownExperiences: Dispatch<SetStateAction<Organization[]>>;
    setMiscellaneousExperiences: Dispatch<SetStateAction<boolean>>;
};

export default function Resume({
    resumeRef,
    skillsRef,
    setShownExperiences,
    setMiscellaneousExperiences,
    ...props//
}: StackProps & ResumeProps) {
    const theme = useTheme();
    const mobile = useIsMobile(theme);

    const [showInfo, setShowInfo] = useState<boolean>(true);
    const [shownExperience, setShownExperience] = useState<WorkExperience | undefined>(undefined);
    const resumeAnimatorProps = useEnterFrameAnimation(instance => {
        resumeRef.current = instance;
        if (window.location.hash === "#Resume") window.scrollTo({ top: (instance?.getBoundingClientRect().top ?? 0) + document.documentElement.scrollTop });
    }, 200);

    return <Stack
        {...props}
        {...resumeAnimatorProps}
        direction="column"
        sx={{
            width: "100%",
            gap: "24px",
        }}
    >
        {showInfo && <Alert
            variant="filled"
            severity="info"
            onClose={() => setShowInfo(false)}
        >
            {mobile ? "Tap" : "Click"} an item to learn more.
        </Alert>}
        <Box
            sx={{
                width: "min(100%, 64rem)",
                alignSelf: "center",
                display: "grid",
                gridTemplateColumns: `4fr ${mobile ? 3 : 1}fr 4fr`,
                gridAutoRows: "max-content",
                alignItems: "center",
                columnGap: "1rem",
            }}
        >
            {experiences.filter(experience => experience.show).map((experience, index, all) => {
                const _index = all.length - index;
                const
                    start = new Date(now),
                    end = new Date(now);

                start.setMonth(start.getMonth() - (months - experience.start));
                end.setMonth(end.getMonth() - (experience.end === undefined ? 0 : months - experience.end));

                return <>
                    {(mobile || _index % 2 === 1 || experience.end === all[index + 1]?.start) && <Box
                        key={index * 7}
                        sx={{
                            gridRow: `${_index * 3} / span 1`,
                            gridColumn: "1 / span 1",
                            color: theme.palette.grey[800],
                        }}
                    >
                        <Divider textAlign="right" >{!mobile && _index % 2 === 1 && <Typography variant="h5" >{experience.organization}</Typography>}</Divider>
                    </Box>}
                    <Box
                        key={(index * 7) + 1}
                        sx={{
                            gridRow: `${_index * 3} / span 1`,
                            gridColumn: "2 / span 1",
                            color: theme.palette.grey[800],
                            alignSelf: "center",
                            justifySelf: "center",
                        }}
                    >
                        {experience.end === undefined ? "Present" : getLabel(experience.end)}
                    </Box>
                    {(mobile || _index % 2 === 0 || experience.end !== undefined && experience.end === all[index + 1]?.start) && <Box
                        key={(index * 7) + 2}
                        sx={{
                            gridRow: `${_index * 3} / span 1`,
                            gridColumn: "3 / span 1",
                            color: theme.palette.grey[800],
                        }}
                    >
                        <Divider textAlign="left" >{!mobile && _index % 2 === 0 && <Typography variant="h5" >{experience.organization}</Typography>}</Divider>
                    </Box>}
                    <Box
                        key={(index * 7) + 3}
                        component="button"
                        className="pop"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            transition: theme.transitions.create("backgroundColor"),
                            gridRow: `${(_index * 3) + 1} / span 1`,
                            gridColumn: `${mobile ? 1 : (_index % 2 === 0 ? 3 : 1)} / span ${mobile ? 3 : 1}`,
                            textAlign: !mobile && _index % 2 === 1 ? "right" : "left",
                            padding: "1rem",
                            backgroundColor: "#00000000",
                            border: "none",
                            borderRadius: theme.shape.borderRadius,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            color: theme.palette.grey[800],
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: "-100%",
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(120deg, transparent, transparent, rgba(255, 255, 255, 0.4), transparent, transparent)",
                                transition: theme.transitions.create("left", { duration: theme.transitions.duration.complex * 2 }),
                            },
                            "&:hover": {
                                backgroundColor: "#d8d8d844",
                                "&:before": {
                                    left: "100%",
                                },
                            },
                        }}
                        onClick={() => setShownExperience(experience)}
                    >
                        {experience.summary}
                    </Box>
                    {(index === 0 || experience.end !== all[index + 1]?.start) && <>
                        {(mobile || _index % 2 === 1) && <Divider
                            key={(index * 7) + 4}
                            sx={{
                                gridRow: `${(_index * 3) + 2} / span 1`,
                                gridColumn: "1 / span 1",
                                color: theme.palette.grey[800],
                            }}
                        />}
                        <Box
                            key={(index * 7) + 5}
                            sx={{
                                gridRow: `${(_index * 3) + 2} / span 1`,
                                gridColumn: "2 / span 1",
                                color: theme.palette.grey[800],
                                alignSelf: "center",
                                justifySelf: "center",
                            }}
                        >
                            {getLabel(experience.start)}
                        </Box>
                        {(mobile || _index % 2 === 0) && <Divider
                            key={(index * 7) + 6}
                            sx={{
                                gridRow: `${(_index * 3) + 2} / span 1`,
                                gridColumn: "3 / span 1",
                                color: theme.palette.grey[800],
                            }}
                        />}
                    </>}
                </>;
            })}
        </Box>
        <Drawer
            anchor="right"
            open={shownExperience !== undefined}
            onClose={() => setShownExperience(undefined)}
            sx={{
                "& > .MuiPaper-root": {
                    width: "min(40rem, 80vw)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    alignItems: "start",
                },
            }}
        >
            <Stack
                direction="row"
                sx={{
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <IconButton
                    onClick={() => setShownExperience(undefined)}
                >
                    <CloseIcon />
                </IconButton>
                <Button
                    variant="outlined"
                    onClick={() => {
                        if (!shownExperience) return;
                        setShownExperiences([shownExperience.organization]);
                        setMiscellaneousExperiences(false);
                        setShownExperience(undefined);
                        setTimeout(() => window.scrollTo({ top: (skillsRef.current?.getBoundingClientRect().top ?? 0) + document.documentElement.scrollTop }), 50);
                    }}
                >
                    View Skills
                </Button>
            </Stack>
            <Stack
                direction="column"
                spacing={1}
                sx={{
                    padding: "1rem",
                }}
            >
                <Typography variant="h5" >{shownExperience?.label} • {shownExperience?.organization}</Typography>
                {shownExperience?.description}
            </Stack>
        </Drawer>
    </Stack>;
}
