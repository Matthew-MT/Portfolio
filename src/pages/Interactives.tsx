import { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import { useEnterFrameAnimation } from "../config/utility";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ToggleButtonGroup, { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { HexColorPicker } from "react-colorful";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import surround from "../showcase/RTFEditorUtilities";

export default function Interactives() {
    const ref = useRef<HTMLElement | null>(null);

    // hooks
    const theme = useTheme();
    const mainAnimatorProps = useEnterFrameAnimation();
    const [formats, setFormats] = useState<string[]>([]);
    const [colorAnchor, setColorAnchor] = useState<HTMLElement | null>(null);
    const [color, setColor] = useState<string>("#000000");
    const [range, setRange] = useState<Range | undefined>();

    useEffect(() => {
        const editor = ref.current;
        if (!editor) return;
        editor.innerHTML = "<ul><li>A</li><b><li>B</li><li>C</li></b></ul><b>bold</b>";
        function handleSelection() {
            const selection = window.getSelection();
            if (!selection || !editor) return;
            setRange(selection.getRangeAt(0));
        }
        document.addEventListener("selectionchange", handleSelection);
        return () => document.removeEventListener("selectionchange", handleSelection);
    }, []);

    return <Stack
        {...mainAnimatorProps}
        direction="column"
        sx={{
            alignSelf: "center",
            width: `min(80vw, ${theme.breakpoints.values.xl}px)`,
            marginTop: "calc(112px - 4rem)",
            padding: "min(4rem, 10vw)",
            alignItems: "center",
            gap: "48px",
        }}
    >
        <Typography variant="h1" >Interactive Examples</Typography>
        <Typography>
            Below are a series of interactive examples that showcase various concepts and technologies. Interact with them to see the example features I've created!
        </Typography>
        <Typography variant="h1" >Rich Text Editor</Typography>
        <Typography>
            Use the Rich Text Editor to write a document using "What You See Is What You Get" features. Insert images, create lists, style paragraphs! Then download your document in <code>.rtf</code> or <code>.md</code> formats.
        </Typography>
        <Paper>
            <Stack
                direction="row"
                sx={{
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <ToggleButtonGroup
                    size="small"
                    sx={{
                        [`& .${toggleButtonGroupClasses.grouped}`]: {
                            margin: theme.spacing(0.5),
                            border: 0,
                            [`&.${toggleButtonGroupClasses.disabled}`]: {
                              border: 0,
                            },
                        },
                        [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
                            marginLeft: "initial",
                            borderLeft: "initial",
                        },
                    }}
                    value={formats}
                    onChange={(event, _formats) => {
                        if (range && range.endOffset !== 0 && !formats.includes("bold") && _formats.includes("bold")) surround(range, "b");
                        setFormats(_formats);
                    }}
                >
                    <ToggleButton
                        value="bold"
                    >
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="italic"
                    >
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="underline"
                    >
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <Divider flexItem orientation="vertical" />
                <ToggleButton
                    size="small"
                    value="color"
                    sx={{
                        margin: theme.spacing(0.5),
                        border: 0,
                    }}
                    selected={colorAnchor !== null}
                    onClick={event => setColorAnchor(event.currentTarget)}
                >
                    <FormatColorFillIcon sx={{ color, stroke: theme.palette.getContrastText(theme.palette.background.paper) }} />
                    <ArrowDropDownIcon />
                </ToggleButton>
                <Popper
                    open={colorAnchor !== null}
                    anchorEl={colorAnchor}
                >
                    <ClickAwayListener
                        onClickAway={() => setColorAnchor(null)}
                    >
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "4px",
                                gap: "4px",
                                width: "min-content",
                            }}
                        >
                            <HexColorPicker
                                color={color}
                                onChange={setColor}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start" >#</InputAdornment>,
                                    },
                                }}
                                value={color.slice(1)}
                                onChange={event => setColor(`#${event.target.value}`)}
                            />
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            </Stack>
            <Divider flexItem />
            <Box
                ref={ref}
                contentEditable
                sx={{
                    minHeight: "1em",
                    padding: "4px",
                }}
            />
        </Paper>
    </Stack>;
}
