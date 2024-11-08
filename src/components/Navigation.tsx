import Tabs, { TabsProps } from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import { samePageLinkNavigation } from "../utility";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

export default function Navigation({ sx, ...props }: TabsProps) {
    const [tab, setTab] = useState<number>(0);
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
            transition: "all .2s linear",
            backdropFilter: top ? undefined : "blur(20px) saturate(1.6)",
            ...sx,
        }}
        value={tab}
        onChange={(event: React.SyntheticEvent, newValue: number) => {
            if (
                event.type !== "click"
                || (
                    event.type === "click"
                    && samePageLinkNavigation(
                        event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                    )
                )
            ) setTab(newValue);
        }}
        {...props}
    >
        <Tab component={Link} label="About" to="/" />
        <Tab component={Link} label="Work" to="/work" />
        <Tab component={Link} label="Contact" to="/contact" />
    </Tabs>;
}
