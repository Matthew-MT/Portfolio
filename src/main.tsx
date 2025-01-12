import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./config/theme.tsx";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
