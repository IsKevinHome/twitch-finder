import { useContext } from "react";
import TwitchContext from "../../context/TwitchContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChannelItem from "./ChannelItem";

const ChannelResults = () => {
    const { channels } = useContext(TwitchContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: "center" }}
            >
                {channels.map((res) => (
                    <Grid item>
                        <ChannelItem channel={res} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ChannelResults;
