import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { purple } from "@mui/material/colors";

let color = purple[500];

const ChannelSearch = () => {
    return (
        <>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
                <TextField
                    id="filled-basic"
                    label="search"
                    variant="filled"
                    fullWidth
                />
            </Box>
        </>
    );
};

export default ChannelSearch;
