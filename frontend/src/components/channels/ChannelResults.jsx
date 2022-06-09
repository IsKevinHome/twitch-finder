import { useContext } from "react";
import TwitchContext from "../../context/TwitchContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChannelItem from "./ChannelItem";

const ChannelResults = () => {
    const { channels } = useContext(TwitchContext);

    let render = () => {
        try {
            return (
                <>
                    {channels.map((res) => (
                        <Grid item>
                            <ChannelItem channel={res} key={res.id} />
                        </Grid>
                    ))}
                </>
            );
        } catch (e) {
            console.log(e);
        }
    };

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
                {render()}
                {/* {channels.map((res) => (
                    <Grid item>
                        <ChannelItem channel={res} />
                    </Grid>
                ))} */}
            </Grid>
        </Box>
    );
};

export default ChannelResults;
