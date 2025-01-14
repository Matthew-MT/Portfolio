import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Box from "@mui/material/Box";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Organization, SkillCategory } from "./config/data";
import { useState } from "react";

export default function App() {
    const [shownExperiences, setShownExperiences] = useState<Organization[]>(Object.values(Organization));
    const [miscellaneousExperiences, setMiscellaneousExperiences] = useState<boolean>(true);
    const [shownSkillCategories, setShownSkillCategories] = useState<SkillCategory[]>(Object.values(SkillCategory));
    const [miscellaneousSkills, setMiscellaneousSkills] = useState<boolean>(true);

    return <div
        style={{
            backgroundImage: "linear-gradient(120deg, #5FCDD9, #04BF9D, #04BFAD, #027373)",
            backgroundSize: "400% 400%",
            backgroundAttachment: "fixed",
            animation: "moving-gradient 15s ease infinite",
            flexGrow: 1,
        }}
    >
        <Box
            sx={{
                position: "fixed",
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "70px",
            }}
        >
            <Navigation sx={{ marginTop: "32px" }} />
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
            <Route path="contact" element={<Contact />} />
        </Routes>
    </div>;
}
