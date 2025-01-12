import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Box from "@mui/material/Box";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function App() {
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
            <Route index element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </div>;
}
