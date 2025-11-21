import Tabs, { TabsProps } from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import useTheme from "@mui/material/styles/useTheme";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink, useLocation } from "react-router";
import { URL_REGEX, useIsMobile } from "../config/utility";

export default function Navigation({ sx, ...props }: TabsProps) {
    // constants
    const theme = useTheme();
    const mobile = useIsMobile(theme);

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
        variant={mobile ? "scrollable" : "standard"}
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
            maxWidth: "100%",
            color: theme.palette.grey[800],
            // transition: "all .2s linear",
            backdropFilter: top && !mobile ? undefined : "blur(20px) saturate(1.6)",
            backgroundColor: top && !mobile ? undefined : `${theme.palette.grey[200]}80`,
            "& > .MuiTabs-scroller": {
                "& > .MuiTabs-flexContainer": {
                    "& > .MuiTab-root": {
                        minHeight: "48px",
                    },
                },
            },
            ...sx,
        }}
        value={location.pathname.match(URL_REGEX)?.[0]}
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
            label="Interactives"
            value="/interactives"
            to="/interactives"
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
