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
        spacing={1}
    >
        {list.map(skill => <Chip color="info" label={skill} />)}
    </Stack>;
}
