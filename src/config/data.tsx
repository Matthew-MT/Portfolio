import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import SkillsList from "../components/SkillsList";
import Box from "@mui/material/Box";

export enum Organization {
    CMU = "Colorado Mesa University",
    WGU = "Western Governors University",
    AMAZON = "Amazon.com",
    MORR = "MORR LLC",
    INCIPIO = "Incipio (MORR LLC)",
    FREELANCE = "Freelance",
};

export const ShortOrganization: { [Key in Organization]?: string } = {
    [Organization.CMU]: "CMU",
    [Organization.WGU]: "WGU",
    [Organization.AMAZON]: "Amazon",
    [Organization.MORR]: "MORR",
    [Organization.INCIPIO]: "Incipio",
};
export type ShortOrganization = typeof ShortOrganization;

export enum SkillCategory {
    WEB = "Web",
    APIS = "APIs",
    DATABASES = "Databases",
    AWS = "AWS",
    GAMES = "Games",
    MOBILE = "Mobile",

    AI = "AI",
    PARADIGMS = "Paradigms",
    LANGUAGES = "Languages",
    LIBRARIES = "Libraries",
    LINUX = "Linux",
    REACT = "React",
    SOFT = "Soft Skills",
    UI = "UI/UX",
};

export interface WorkExperience {
    start: number;
    end?: number;
    side: "left" | "right";
    show: boolean;
    label: string;
    organization: Organization;
    description: ReactNode;
    summary: ReactNode;
};

export interface Skill {
    experiences: Organization[];
    shortExperiences: ShortOrganization[Organization][],
    categories: SkillCategory[];
    label: string;
    proficiency: number;
    description?: ReactNode;
};

export const experiences: WorkExperience[] = [
    {
        start: 0,
        end: 45,
        side: "left",
        show: false,
        label: "Student",
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <Typography>Graduated magna cum laude with a Bachelors in Science in Computer Science and a Bachelors in Science in Mathematics in May 2023.</Typography>
        </Stack>,
        summary: <Typography>Graduated magna cum laude with a Bachelors in Science in Computer Science and a Bachelors in Science in Mathematics in May 2023.</Typography>,
    },
    {
        start: 9,
        end: 12,
        side: "right",
        show: false,
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
        summary: <Box></Box>,
    },
    {
        start: 12,
        end: 33,
        side: "right",
        show: false,
        label: "Mathematics Tutor",
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["Mathematics", "Mathematics Education", "Communication"]} />
            <Typography>Tutored students enrolled in the mathematics program at CMU.</Typography>
        </Stack>,
        summary: <Box></Box>,
    },
    {
        start: 33,
        end: 36,
        side: "right",
        show: true,
        label: "Software Development Engineer Intern",
        organization: Organization.AMAZON,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "User Interface Design", "Client Relations", "Agile", "AWS"]} />
            <Typography>
                <ul>
                    <li>Collaborated with 6 stakeholders to develop a task automation dashboard.</li>
                    <li>Led the development of a serverless application using AWS-Lambda, AWS-DynamoDB, and JavaScript to manage business data. Integrated server and client using AWS-API Gateway for a real-time data workflow.</li>
                    <li>Delivered a DevOps data control and monitoring solution by building a user-facing dashboard using Node.js, React, and Cloudscape, which automated DevOps workflows for the 6-person team and increased process efficiency.</li>
                </ul>
            </Typography>
        </Stack>,
        summary: <Typography>Led the development of a serverless DevOps data control and monitoring solution using Node.js, AWS-Lambda, AWS-DynamoDB, JavaScript, and React to automate DevOps workflows for a 6-person team.</Typography>,
    },
    {
        start: 36,
        end: 45,
        side: "right",
        show: true,
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
        summary: <Typography>Collaborated with two other students and several project stakeholders to design and develop a digital billboard solution using JavaScript, React, and MongoDB as a candidate to replace current university billboard software.</Typography>,
    },
    {
        start: 45,
        end: 48,
        side: "left",
        show: true,
        label: "Student",
        organization: Organization.CMU,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["React", "User Interface Design", "Client Relations", "JavaScript", "MongoDB"]} />
            <Typography>Graduated magna cum laude with a Bachelors in Science in Computer Science and a Bachelors in Science in Mathematics in May 2023.</Typography>
        </Stack>,
        summary: <Typography>Graduated!</Typography>,
    },
    {
        start: 48,
        end: 56,
        side: "right",
        show: true,
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
                    <li>Developed and deployed a mobile app on Apple TestFlight for students using React Native and Expo, enabling seamless student-university interactions.</li>
                    <li>Set up Supabase PostgreSQL for secure relational data storage, file handling, and live updates. Configured user authentication and row-level security (RLS), enhancing data security compliance for all users.</li>
                    <li>Coordinated the alpha testing phase to refine client requirements and user expectations, resulting in positive feedback from client stakeholders and at least 10 alpha-test users.</li>
                </ul>
            </Typography>
        </Stack>,
        summary: <Typography>Worked with a client to develop full-stack web and mobile applications to connect prospective students with dream universities using Node.js, PostgreSQL, TypeScript, React, and React Native.</Typography>,
    },
    {
        start: 53,
        end: 55,
        side: "left",
        show: false,
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
        summary: <Box></Box>,
    },
    {
        start: 56,
        end: 73,
        side: "right",
        show: true,
        label: "IT Support Engineer",
        organization: Organization.FREELANCE,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["Technical Support", "Problem Solving", "Client Relations", "Information Technology"]} />
            <Typography>
                <ul>
                    <li>Built a client base through local networking, providing IT support for home and small business users.</li>
                    <li>Resolved over 25 system administration issues across Windows and Linux environments, including troubleshooting and software deployment, resulting in improved system uptime and efficiency for clients.</li>
                    <li>Liaised with clients to maintain a 100% client satisfaction rate.</li>
                </ul>
            </Typography>
        </Stack>,
        summary: <Typography>Resolved over 25 system administration issues across Windows and Linux environments for home and small business users.</Typography>,
    },
    {
        start: 73,
        side: "left",
        show: true,
        label: "Student",
        organization: Organization.WGU,
        description: <Stack
            spacing={1}
        >
            <SkillsList list={["AI", "Python", "Bash", "Research", "Technical Writing"]} />
            <Typography>Enrolled in a Masters in Computer Science specializing in AI and ML at Western Governors University. Expected to graduate in March 2027.</Typography>
        </Stack>,
        summary: <Typography>Enrolled in a Masters in Computer Science specializing in AI and ML at Western Governors University. Expected to graduate in March 2027.</Typography>,
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
            SkillCategory.PARADIGMS,
        ],
        label: "Agile",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.CMU,
            Organization.WGU,
        ],
        categories: [],
        label: "Algorithms",
        proficiency: 100,
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
    },
    {
        experiences: [
            Organization.CMU,
            Organization.WGU,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.LINUX,
        ],
        label: "Bash Scripting",
        proficiency: 100,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.WGU,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.LINUX,
        ],
        label: "Bash Terminal",
        proficiency: 100,
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
    },
    {
        experiences: [],
        categories: [
            SkillCategory.LINUX,
        ],
        label: "CentOS",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [],
        label: "Cybersecurity",
        proficiency: 25,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.MOBILE,
            SkillCategory.WEB,
        ],
        label: "Dart",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.WGU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.PARADIGMS,
        ],
        label: "Full-Stack",
        proficiency: 100,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.LIBRARIES,
            SkillCategory.MOBILE,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "Flutter",
        proficiency: 50,
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [
            SkillCategory.PARADIGMS,
            SkillCategory.GAMES,
            SkillCategory.UI,
        ],
        label: "Game Development",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.FREELANCE,
        ],
        categories: [],
        label: "Information Technology",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.CMU,
        ],
        categories: [],
        label: "Mathematics",
        proficiency: 100,
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
    },
    {
        experiences: [
            Organization.CMU,
            Organization.WGU,
        ],
        categories: [
            SkillCategory.GAMES,
            SkillCategory.LANGUAGES,
        ],
        label: "Python",
        proficiency: 100,
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
    },
    {
        experiences: [
            Organization.WGU,
        ],
        categories: [
            SkillCategory.LANGUAGES,
        ],
        label: "Rust",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.CMU,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.LANGUAGES,
            SkillCategory.WEB,
        ],
        label: "TypeScript",
        proficiency: 100,
    },
    {
        experiences: [
            Organization.CMU,
            Organization.WGU,
            Organization.FREELANCE,
        ],
        categories: [
            SkillCategory.LINUX,
        ],
        label: "Ubuntu",
        proficiency: 100,
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
        label: "UI Design",
        proficiency: 75,
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
    },
    {
        experiences: [
            Organization.AMAZON,
            Organization.CMU,
            Organization.INCIPIO,
            Organization.MORR,
        ],
        categories: [
            SkillCategory.PARADIGMS,
            SkillCategory.UI,
            SkillCategory.WEB,
        ],
        label: "Web Development",
        proficiency: 100,
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
    },
].map(skill => ({ ...skill, shortExperiences: skill.experiences.map(experience => experience in ShortOrganization ? ShortOrganization[experience] : experience) }));
