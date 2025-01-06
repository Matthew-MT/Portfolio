// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid2";
import ShowcaseCard from "../components/ShowcaseCard";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
    if (date.getMonth() === 0) return date.getFullYear();
    // January shouldn't show up because the number representing the year represents it.
    return monthNames[date.getMonth()];
});

interface WorkExperience {
    start: number;
    end?: number;
    side: "left" | "right";
    label: string;
    organization: string;
    description: string;
};

const experiences: WorkExperience[] = [
    {
        start: 0,
        end: 45,
        side: "left",
        label: "Student",
        organization: "Colorado Mesa University",
        description: "Description TBD",
    },
    {
        start: 9,
        end: 12,
        side: "right",
        label: "Software Intern",
        organization: "Colorado Mesa University",
        description: "Description TBD",
    },
    {
        start: 12,
        end: 33,
        side: "right",
        label: "Mathematics Tutor",
        organization: "Colorado Mesa University",
        description: "Description TBD",
    },
    {
        start: 33,
        end: 36,
        side: "right",
        label: "Software Development Engineer Intern",
        organization: "Amazon.com",
        description: "Description TBD",
    },
    {
        start: 36,
        end: 45,
        side: "right",
        label: "Software Intern",
        organization: "Colorado Mesa University",
        description: "Description TBD",
    },
    {
        start: 48,
        end: 55,
        side: "right",
        label: "Contract Software Developer",
        organization: "MORR LLC",
        description: "Description TBD",
    },
    {
        start: 53,
        end: 55,
        side: "left",
        label: "Lead Contract Software Developer",
        organization: "Incipio (MORR LLC)",
        description: "Description TBD",
    },
    {
        start: 56,
        side: "right",
        label: "IT Specialist",
        organization: "Freelance",
        description: "Description TBD",
    },
];

function DividerLabel({ variant, label }: { variant?: TypographyProps["variant"], label: string }) {
    const theme = useTheme();

    return <Typography
        variant={variant || "body1"}
        textAlign="center"
        sx={{
            color: variant === "body2" ? theme.palette.grey[400] : theme.palette.grey[600],
            width: "100%",
            height: "1.25rem",
            lineHeight: "1.25rem",
            marginTop: "-0.75rem",
            marginBottom: "-0.5rem",
            alignSelf: "center",
            overflow: "hidden",
            mixBlendMode: "difference",
            "&::before, &::after": {
                display: "inline-block",
                position: "relative",
                verticalAlign: "middle",
                content: "\"\"",
                backgroundColor: variant === "body2" ? theme.palette.grey[400] : theme.palette.grey[600],
                mixBlendMode: "difference",
                width: "50%",
                height: "1px",
            },
            "&::before": {
                marginLeft: "-50%",
                right: "2px",
            },
            "&::after": {
                marginRight: "-50%",
                left: "2px",
            },
        }}
    >
        {label}
    </Typography>;
}

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
                marginTop: "calc(112px - 4rem)",
                padding: "4rem",
                width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
                flexGrow: 1,
                rowGap: "48px",
            }}
        >
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
                        borderTop: index === 0 ? `1px solid ${theme.palette.grey[600]}` : undefined,
                        borderLeft: `1px solid ${theme.palette.grey[600]}`,
                        borderRight: `1px solid ${theme.palette.grey[600]}`,
                        mixBlendMode: "difference",
                        justifyContent: "end",
                        paddingX: "0.5rem",
                    }}
                >
                    <DividerLabel variant={typeof label === "number" ? "body1" : "body2"} label={`${label}`} />
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
                                "&:hover": {
                                    height: "max-content",
                                    minHeight: "100%",
                                },
                            }}
                            title={experience.label}
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
                                    <Divider />
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
    </Stack>;
}
