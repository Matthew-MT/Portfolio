import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export interface SkillsListProps {
    list: string[];
};

export default function SkillsList({
    list,
}: SkillsListProps) {
    return <Stack
        direction="row"
        sx={{
            flexWrap: "wrap",
            gap: "8px",
        }}
    >
        {list.map((skill, index) => <Chip key={index} color="secondary" label={skill} />)}
    </Stack>;
}
