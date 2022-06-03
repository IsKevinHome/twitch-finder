import { useContext } from "react";
import TwitchContext from "../../context/TwitchContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChannelItem from "./ChannelItem";

const ChannelResults = () => {
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
                {/* NO PARAMS ON GRID ITEM, KLEEP IT LIKE THIS BUT MAP */}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item>
                    <ChannelItem />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChannelResults;