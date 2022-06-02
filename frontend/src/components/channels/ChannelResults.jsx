import { useContext } from "react";
import TwitchContext from "../../context/TwitchContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChannelItem from "./ChannelItem";

const ChannelResults = () => {
    return (
        <Box>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: "center" }}
            >
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
                <Grid item xs={3}>
                    <ChannelItem />
                </Grid>{" "}
            </Grid>
        </Box>
    );
};

export default ChannelResults;
