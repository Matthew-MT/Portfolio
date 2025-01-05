import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Box from "@mui/material/Box";
import About from "./pages/About";
import Work from "./pages/Work";

export default function App() {
    return <div style={{ minHeight: "100%" }}>
        <Box
            sx={{
                position: "fixed",
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
            <Route path="contact" element={<About />} />
        </Routes>
    </div>;
}
