import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./config/theme.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
