import Tabs, { TabsProps } from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import useTheme from "@mui/material/styles/useTheme";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink, useLocation } from "react-router";
import { useIsMobile } from "../config/utility";

export default function Navigation({ sx, ...props }: TabsProps) {
    // constants
    const theme = useTheme();
    const mobile = useIsMobile(theme);

    // hooks
    const location = useLocation();
    const [top, setTop] = useState<boolean>((document.getElementById("root")?.scrollTop ?? 0) < 1);

    useEffect(() => {
        function handleScroll() { setTop((document.getElementById("root")?.scrollTop ?? 0) < 1); console.log(document.getElementById("root")?.scrollTop); }
        document.getElementById("root")?.addEventListener("scroll", handleScroll);
        return () => document.getElementById("root")?.removeEventListener("scroll", handleScroll);
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
            transition: "all .2s linear",
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
