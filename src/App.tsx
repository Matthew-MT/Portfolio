import { useState } from "react";
import "./App.css";
import donut from "./assets/donut_1.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function App() {
    return <Stack
        direction="column"
    >
        <div
            style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${donut})`,
            }}
        />
        <Box
            sx={{
                padding: "4rem",
            }}
        >
            <Typography variant="h1">Matthew Montoni-Tiller</Typography>
            <Typography variant="overline">Software Engineer</Typography>
            <Card
                variant="outlined"
            >
                <CardContent></CardContent>
                <CardActions></CardActions>
            </Card>
        </Box>
    </Stack>;
}
