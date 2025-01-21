import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import SkillsList from "../components/SkillsList";

export enum Organization {
    CMU = "Colorado Mesa University",
    AMAZON = "Amazon.com",
    MORR = "MORR LLC",
    INCIPIO = "Incipio (MORR LLC)",
    FREELANCE = "Freelance",
};

export enum SkillCategory {
    WEB = "Web",
    APIS = "APIs",
    DATABASES = "Databases",
    AWS = "AWS",
    GAMES = "Games",
    MOBILE = "Mobile",

    AI = "AI",
    DEVELOPMENT = "Development Paradigms",
    LANGUAGES = "Languages",
    LIBRARIES = "Libraries",
    LINUX = "Linux",
    REACT = "React",
    SOFT = "Soft Skills",
    UI = "User Interfaces",
};

interface WorkExperience {
    start: number;
    end?: number;
    side: "left" | "right";
    label: string;
    organization: Organization;
    description: ReactNode;
};

interface Skill {
    experiences: (typeof experiences[number]["organization"])[];
    categories: SkillCategory[];
    label: string;
    proficiency: number;
    description: ReactNode;
};

export const experiences: WorkExperience[] = [
    {
        start: 0,
        end: 45,
        side: "left",
        label: "Student",
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <Typography>Graduated magna cum laude with a Bachelor's in Science in Computer Science and a Bachelor's in Science in Mathematics in May 2023.</Typography>
        </Stack>,
    },
    {
        start: 9,
        end: 12,
        side: "right",
        label: "Software Intern",
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "Cybersecurity", "Web Development"]} />
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
        organization: Organization.CMU,
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
        organization: Organization.AMAZON,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "User Interface Design", "Client Relations", "Agile", "AWS"]} />
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
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "User Interface Design", "Client Relations", "JavaScript", "MongoDB"]} />
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
        organization: Organization.MORR,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "User Interface Design", "Client Relations", "Agile", "AWS"]} />
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
        organization: Organization.INCIPIO,
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
        organization: Organization.FREELANCE,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["Technical Support", "Problem Solving", "Client Relations", "Information Technology"]} />
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

export const skills: Skill[] = [
    {
        experiences: [
            Organization.AMAZON,
            Organization.MORR,
            Organization.INCIPIO,
        ],
        categories: [
            SkillCategory.DEVELOPMENT,
        ],
        label: "Agile",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.APIS,
            SkillCategory.LIBRARIES,
            SkillCategory.MOBILE,
            SkillCategory.WEB,
        ],
        label: "Agora.io",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [],
        label: "Algorithms",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
        ],
        categories: [
            SkillCategory.APIS,
            SkillCategory.AWS,
        ],
        label: "AWS-API Gateway",
        proficiency: 25,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
        ],
        categories: [
            SkillCategory.AWS,
            SkillCategory.DATABASES,
            SkillCategory.LIBRARIES,
        ],
        label: "AWS-DynamoDB",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.AWS,
        ],
        label: "AWS-EC2",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.AWS,
        ],
        label: "AWS-IAM",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
        ],
        categories: [
            SkillCategory.AWS,
        ],
        label: "AWS-Lambda",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.AWS,
            SkillCategory.APIS,
            SkillCategory.DATABASES,
        ],
        label: "AWS-S3",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.LINUX,
        ],
        label: "Bash Scripting",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.LINUX,
        ],
        label: "Bash Terminal",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.INCIPIO,
        ],
        categories: [
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "Bubble.io",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.GAMES,
            SkillCategory.LANGUAGES,
        ],
        label: "C/C++",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [],
        categories: [
            SkillCategory.LINUX,
        ],
        label: "CentOS",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.SOFT,
        ],
        label: "Client Relations",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.SOFT,
        ],
        label: "Communication",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "CSS3",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [],
        label: "Cybersecurity",
        proficiency: 25,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
            Organization.FREELANCE,
        ],
        categories: [],
        label: "Debugging",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.DEVELOPMENT,
        ],
        label: "Full-Stack Development",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.DEVELOPMENT,
            SkillCategory.GAMES,
            SkillCategory.UI,
        ],
        label: "Game Development",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.INCIPIO,
        ],
        categories: [
            SkillCategory.AI,
        ],
        label: "GPT-4",
        proficiency: 25,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.INCIPIO,
        ],
        categories: [
            SkillCategory.AI,
            SkillCategory.APIS,
        ],
        label: "GPT Assistant API",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "HTML5",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.FREELANCE,
        ],
        categories: [],
        label: "Information Technology",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.WEB,
        ],
        label: "JavaScript",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [],
        label: "Mathematics",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.DATABASES,
            SkillCategory.LIBRARIES,
        ],
        label: "MongoDB",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LIBRARIES,
            SkillCategory.WEB,
        ],
        label: "Next.js",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LIBRARIES,
        ],
        label: "Node.js",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.DATABASES,
        ],
        label: "PostgreSQL",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.GAMES,
            SkillCategory.LANGUAGES,
        ],
        label: "Python",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LIBRARIES,
            SkillCategory.REACT,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "React.js",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LIBRARIES,
            SkillCategory.MOBILE,
            SkillCategory.REACT,
            SkillCategory.UI,
        ],
        label: "React Native",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.GAMES,
            SkillCategory.LIBRARIES,
            SkillCategory.UI,
        ],
        label: "Simple DirectMedia Layer (SDL)",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.GAMES,
            SkillCategory.LIBRARIES,
            SkillCategory.UI,
        ],
        label: "Simple Fast Media Library (SFML)",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.LIBRARIES,
        ],
        label: "Socket Programming",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "Tailwind CSS",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.SOFT,
        ],
        label: "Teamwork",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.SOFT,
        ],
        label: "Technical Support",
        proficiency: 50,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LANGUAGES,
        ],
        label: "TypeScript",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.LINUX,
        ],
        label: "Ubuntu",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.INCIPIO,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.UI,
        ],
        label: "User Interface Design",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.MORR,
        ],
        categories: [
            SkillCategory.WEB,
        ],
        label: "Vercel",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.INCIPIO,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.DEVELOPMENT,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "Web Development",
        proficiency: 100,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.LINUX,
        ],
        label: "Windows Subsystem for Linux (WSL)",
        proficiency: 75,
        description: <Stack
            spacing={1}
        >
        </Stack>,
    },
];
