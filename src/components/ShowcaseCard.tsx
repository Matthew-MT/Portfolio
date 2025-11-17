import Stack, { StackProps } from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { ReactNode, useMemo } from "react";
import { useEnterFrameAnimation } from "../config/utility";

export interface ShowcaseCardProps extends StackProps {
    align?: "right" | "left";
    animateIn?: boolean;
    delay?: number;
    hoverable?: boolean;
    variant?: TypographyProps["variant"];
    title: string;
    image?: string;
    children?: ReactNode;
};

export default function ShowcaseCard({
    align = "right",
    animateIn,
    delay,
    hoverable = true,
    variant,
    title,
    image,
    children,
    sx,
    ...props//
}: ShowcaseCardProps) {
    const theme = useTheme();
    const contrast = useMemo(() => theme.palette.getContrastText(sx && typeof sx === "object" && "backgroundColor" in sx && typeof sx.backgroundColor === "string" && sx.backgroundColor.startsWith("#") ? sx.backgroundColor : "#fff"), [sx, theme.palette]);
    const animatorProps = useEnterFrameAnimation(undefined, delay);

    return <Stack
        {...(animateIn ? animatorProps : {})}
        direction="column"
        sx={[{
            borderRadius: "4rem",
            color: contrast,
            alignItems: align === "left" ? "flex-start" : "flex-end",
            gap: "2rem",
            padding: "2rem 3.2rem",
            position: "relative",
            overflow: "hidden",
            transition: theme.transitions.create(["shadow", "transform"]),
            boxShadow: `0 0 8px 0 ${theme.palette.grey[600]}`,
            ...(hoverable ? {
                "&:hover": {
                    boxShadow: `0 0 32px 0 ${theme.palette.grey[600]}`,
                    transform: "translate(0, -0.2rem)",
                },
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(120deg, transparent, transparent, rgba(255, 255, 255, 0.4), transparent, transparent)",
                    transition: theme.transitions.create("left", { duration: theme.transitions.duration.complex * 2 }),
                },
                "&:hover:before": {
                    left: "100%",
                },
            } : {}),
        }, ...(sx ? Array.isArray(sx) ? sx : [sx] : [])]}
        {...props}
    >
        <Typography variant={variant || "h2"} textAlign={align}>{title}</Typography>
        {children}
        {image && <figure
            style={{
                width: "100%",
                margin: 0,
            }}
        >
            <img
                src={image}
                style={{
                    float: "right",
                    maxWidth: "min(100%, 640px)",
                }}
            />
        </figure>}
    </Stack>;
}
