// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import ShowcaseCard from "../components/ShowcaseCard";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ReactNode } from "react";
import SkillsList from "../components/SkillsList";

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
    description: ReactNode;
};

const experiences: WorkExperience[] = [
    {
        start: 0,
        end: 45,
        side: "left",
        label: "Student",
        organization: "Colorado Mesa University",
        description: <Stack
            spacing={1}
        >
            <Typography>Bachelor's in Science in Computer Science, Mathematics.</Typography>
        </Stack>,
    },
    {
        start: 9,
        end: 12,
        side: "right",
        label: "Software Intern",
        organization: "Colorado Mesa University",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React.js", "Cybersecurity", "Web Development", "Python", "JavaScript"]} />
            <Typography>
                <ul>
                    <li>Collaborated with one other student and one faculty mentor to continue development of an introductory Cybersecurity education program modeled after PyGoat.</li>
                    <li>Made improvements and feature additions to the Python server, including performance optimizations, new lessons, and content organization.</li>
                    <li>Implemented UI improvements in the web application using JavaScript and React, updated the lesson plan, and collaborated to develop new lessons.</li>
                </ul>
            </Typography>
        </Stack>,
    },
    {
        start: 12,
        end: 33,
        side: "right",
        label: "Mathematics Tutor",
        organization: "Colorado Mesa University",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["Mathematics", "Mathematics Education", "Communication"]} />
            <Typography>Tutored students enrolled in the mathematics program at CMU.</Typography>
        </Stack>,
    },
    {
        start: 33,
        end: 36,
        side: "right",
        label: "Software Development Engineer Intern",
        organization: "Amazon.com",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React.js", "User Interface Design", "Communication", "Agile", "Amazon Web Services"]} />
            <Typography>
                <ul>
                    <li>Collaborated with 6 stakeholders to develop a task automation dashboard.</li>
                    <li>Led the development of a serverless application using AWS-Lambda, AWS-DynamoDB, and JavaScript to manage business data. Integrated server and client using AWS-API Gateway for a real-time data workflow, increasing data recency by an estimated 50%.</li>
                    <li>Delivered a DevOps data control and monitoring solution by building a user-facing dashboard using Node.js, React, and Cloudscape, which automated DevOps workflows for the 6-person team and increased process efficiency.</li>
                </ul>
            </Typography>
        </Stack>,
    },
    {
        start: 36,
        end: 45,
        side: "right",
        label: "Software Intern",
        organization: "Colorado Mesa University",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React.js", "User Interface Design", "Client Relations", "JavaScript", "MongoDB"]} />
            <Typography>
                <ul>
                    <li>Collaborated with two other students and several project stakeholders to design and develop a digital billboard solution as a candidate to replace current university billboard software.</li>
                    <li>Developed a user-facing dashboard using JavaScript and React to manage billboard content and configuration, enabling live content updates by university staff and user management by university administrators.</li>
                    <li>Built an always-online server application using Node.js, Express.js, and MongoDB to manage, store, and serve billboard content and login data in JSON format.</li>
                    <li>Automated the billboard display using Electron.js and React, enabling hands-off functionality.</li>
                </ul>
            </Typography>
        </Stack>,
    },
    {
        start: 48,
        end: 55,
        side: "right",
        label: "Contract Software Developer",
        organization: "MORR LLC",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React.js", "User Interface Design", "Client Relations", "Communication", "Agile"]} />
            <Typography>
                <ul>
                    <li>Worked with a client to develop a full-stack application to connect prospective students with dream universities.</li>
                    <li>Designed and implemented dashboards for universities and students using Node.js, TypeScript, and React, reducing design-to-development timeline by an estimated 30% compared to alternative solutions.</li>
                    <li>Automated the CI/CD pipeline using GitHub Actions and Vercel, reducing the need for manual monitoring by an estimated 90%.</li>
                    <li>Developed and deployed a mobile app on Apple TestFlight for students using React Native and Expo, enabling seamless student-university interactions and increasing user engagement by an estimated 5%.</li>
                    <li>Set up Supabase PostgreSQL for secure relational data storage, file handling, and live updates. Configured user authentication and row-level security (RLS), enhancing data security compliance for all users.</li>
                    <li>Coordinated the alpha testing phase to refine client requirements and user expectations, resulting in positive feedback from client stakeholders and at least 10 alpha-test users.</li>
                </ul>
            </Typography>
        </Stack>,
    },
    {
        start: 53,
        end: 55,
        side: "left",
        label: "Lead Contract Software Developer",
        organization: "Incipio (MORR LLC)",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["User Interface Design", "AI", "GPT-4", "Web Development", "Bubble.io"]} />
            <Typography>
                <ul>
                    <li>Built groundbreaking AI strategy management software designed to track top-level corporate goals and milestones. Collaborated with project stakeholders to generate requirements and feature sets.</li>
                    <li>Directed the UI/UX design cycle to build an intuitive and fully-featured user interface prototyped in Figma.</li>
                    <li>Developed a web dashboard using the Bubble.io platform, enabling strategy managers to define objectives and manage team assignments, prioritizing clear cross-functional communication about all goals.</li>
                    <li>Integrated ChatGPT’s GPT Assistant service via the GPT-4 API to generate business insights and strategy based on accumulated platform data from employees, projects, teams, and performance reviews, demonstrating a strong understanding of Large Language Models (LLMs).</li>
                </ul>
            </Typography>
        </Stack>,
    },
    {
        start: 56,
        side: "right",
        label: "IT Specialist",
        organization: "Freelance",
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["Technical Support", "Problem Solving", "Communication", "Information Technology Infrastructure"]} />
            <Typography>
                <ul>
                    <li>Built a client base through local networking, providing IT support for home and small business users.</li>
                    <li>Resolved over 20 system administration issues across Windows and Linux environments, including troubleshooting and software deployment, resulting in improved system uptime and efficiency for clients.</li>
                    <li>Liaised with clients to maintain a 100% client satisfaction rate.</li>
                </ul>
            </Typography>
        </Stack>,
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
