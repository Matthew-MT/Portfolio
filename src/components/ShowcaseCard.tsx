import Stack, { StackProps } from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { ReactNode, useMemo } from "react";
import { useEnterFrameAnimation } from "../config/utility";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

export interface ShowcaseCardProps extends Omit<StackProps, "title"> {
    align?: "right" | "left";
    animateIn?: boolean;
    delay?: number;
    hoverable?: boolean;
    variant?: TypographyProps["variant"];
    title: ReactNode;
    image?: string;
    imageSx?: SxProps;
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
    imageSx,
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
            gap: theme.spacing(2),
            padding: "2rem 3.2rem",
            position: "relative",
            overflow: "hidden",
            transition: theme.transitions.create(["box-shadow", "transform"]),
            boxShadow: `0 0 16px 0 ${theme.palette.grey[600]}`,
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
        {typeof title === "string" ? <Typography variant={variant || "h2"} textAlign={align}>{title}</Typography> : title}
        {children}
        {image && <Box
            component="figure"
            sx={{
                width: "100%",
                margin: 0,
            }}
        >
            <Box
                component="img"
                src={image}
                sx={[
                    ...(Array.isArray(imageSx) ? imageSx : [imageSx]),
                    {
                        float: "right",
                        maxWidth: "min(100%, 640px)",
                    },
                ]}
            />
        </Box>}
    </Stack>;
}
