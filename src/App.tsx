import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Box from "@mui/material/Box";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Organization, SkillCategory } from "./config/data";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import { useIsMobile } from "./config/utility";
import Interactives from "./pages/Interactives";

export default function App() {
    const theme = useTheme();
    const mobile = useIsMobile(theme);
    const [shownExperiences, setShownExperiences] = useState<Organization[]>(Object.values(Organization));
    const [miscellaneousExperiences, setMiscellaneousExperiences] = useState<boolean>(true);
    const [shownSkillCategories, setShownSkillCategories] = useState<SkillCategory[]>(Object.values(SkillCategory));
    const [miscellaneousSkills, setMiscellaneousSkills] = useState<boolean>(true);

    return <Stack
        direction="column"
        sx={{
            flexGrow: 1,
        }}
    >
        <Box
            component="nav"
            sx={{
                alignSelf: "center",
                position: "fixed",
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
                height: mobile ? "min-content" : "70px",
                overflow: mobile ? "hidden" : undefined,
            }}
        >
            <Navigation sx={{ marginTop: mobile ? undefined : "32px" }} />
        </Box>
        <Routes>
            <Route index element={<About
                setShownExperiences={setShownExperiences}
                setMiscellaneousExperiences={setMiscellaneousExperiences}
                setShownSkillCategories={setShownSkillCategories}
                setMiscellaneousSkills={setMiscellaneousSkills}
            />} />
            <Route path="work" element={<Work
                shownExperiences={shownExperiences}
                setShownExperiences={setShownExperiences}
                miscellaneousExperiences={miscellaneousExperiences}
                setMiscellaneousExperiences={setMiscellaneousExperiences}
                shownSkillCategories={shownSkillCategories}
                setShownSkillCategories={setShownSkillCategories}
                miscellaneousSkills={miscellaneousSkills}
                setMiscellaneousSkills={setMiscellaneousSkills}
            />} />
            <Route path="interactives" element={<Interactives />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </Stack>;
}
