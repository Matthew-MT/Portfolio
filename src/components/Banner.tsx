import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

export interface BannerProps {
    sx?: SxProps;
    src: string;
};

export default function Banner({
    sx,
    src,
}: BannerProps) {
    return <Box
        sx={{
            height: "72vh",
            width: "100%",
            backgroundSize: "auto 100%",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundImage: `url(${src})`,
            backgroundColor: "#172026",
            boxShadow: `inset 0 0 16px 0 #000`,
            ...sx,
        }}
    />;
}
