import Stack, { StackProps } from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";

export interface ShowcaseCardProps extends StackProps {
    title: string;
    image: string;
};

export default function ShowcaseCard({
    title,
    image,
    sx,
    ...props//
}: ShowcaseCardProps) {
    const theme = useTheme();
    const contrast = useMemo(() => theme.palette.getContrastText(sx && typeof sx === "object" && "backgroundColor" in sx && typeof sx.backgroundColor === "string" && sx.backgroundColor.startsWith("#") ? sx.backgroundColor : "#fff"), [sx, theme.palette]);

    return <Stack
        direction="column"
        gap="2rem"
        sx={{
            borderRadius: "4rem",
            color: contrast,
            alignItems: "flex-end",
            padding: "2rem 3.2rem",
            overflow: "hidden",
            transition: "all .2s ease-out",
            boxShadow: `0 0 8px 0 ${theme.palette.grey[600]}`,
            ":hover": {
                boxShadow: `0 0 32px 0 ${theme.palette.grey[600]}`,
                transform: "translate(0, -0.2rem)",
            },
            ...sx,
        }}
        {...props}
    >
        <Typography variant="h2" textAlign="right">{title}</Typography>
        <figure
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
        </figure>
    </Stack>;
}
