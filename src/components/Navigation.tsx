import Tabs, { TabsProps } from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import useTheme from "@mui/material/styles/useTheme";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink, useLocation } from "react-router";

export default function Navigation({ sx, ...props }: TabsProps) {
    // constants
    const theme = useTheme();

    // hooks
    const location = useLocation();
    const [top, setTop] = useState<boolean>(window.scrollY < 1);

    useEffect(() => {
        function handleScroll() { setTop(window.scrollY < 1); }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <Tabs
        key="navigation"
        role="navigation"
        sx={{
            position: "fixed",
            zIndex: 20,
            transition: "all .2s linear",
            backdropFilter: top ? undefined : "blur(20px) saturate(1.6)",
            backgroundColor: top ? undefined : `${theme.palette.grey[600]}80`,
            "& > .MuiTabs-scroller": {
                "& > .MuiTabs-flexContainer": {
                    "& > .MuiTab-root": {
                        minHeight: "48px",
                    },
                },
            },
            ...sx,
        }}
        value={location.pathname}
        {...props}
    >
        <Tab
            component={NavLink}
            label="About"
            value="/"
            to="/"
        />
        <Tab
            component={NavLink}
            label="Work"
            value="/work"
            to="/work"
        />
        <Tab
            component={NavLink}
            label="Contact"
            value="/contact"
            to="/contact"
        />
        <Tab
            icon={<GitHubIcon />}
            iconPosition="start"
            component={NavLink}
            label="GitHub"
            to="https://github.com/Matthew-MT/Portfolio"
        />
    </Tabs>;
}
