import { useContext } from "react";
import TwitchContext from "../../context/TwitchContext";
import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ChannelSearch from "../channels/ChannelSearch";
import gameControl from "../../assets/photos/clipart.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ChannelResults from "../channels/ChannelResults";

const Home = () => {
    const { channels, channelFound } = useContext(TwitchContext);

    const minHeightConditional =
        channels.length < 1 ? "calc(100vh - 64px" : "calc(50vh - 64px)";

    const justifyHeightConditional = channels.length < 1 ? "center" : "left";

    // RENDER IMAGE
    let image;
    if (channels.length < 1 && !channelFound) {
        image = (
            <Grid
                item
                xs={12}
                md={6}
                align="center"
                sx={{
                    display: { xs: "none", lg: "block" },
                }}
            >
                <Paper elevation={0}>
                    <img
                        src={gameControl}
                        alt="game controllers dangling"
                        style={{ width: "70%" }}
                    />
                </Paper>
            </Grid>
        );
    } else if (!channelFound) {
        image = null;
    } else {
        image = null;
    }
    // RENDER ERROR MESSAGE
    let errorMessage;
    if (channelFound === undefined) {
        errorMessage = null;
    } else if (!channelFound) {
        errorMessage = (
            <Typography variant="subtitle2" color="error">
                No channels match that query
            </Typography>
        );
    } else {
        errorMessage = null;
    }

    return (
        <>
            <CssBaseline />
            <Box sx={{ mx: 5 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent={justifyHeightConditional}
                    alignItems="center"
                    // not changing on mobile, check?
                    style={{ minHeight: minHeightConditional }}
                >
                    <Grid item xs={12} md={6} align="center">
                        <Paper
                            elevation={0}
                            sx={{ maxWidth: 500, textAlign: "left" }}
                        >
                            <Typography
                                variant="h5"
                                component="h1"
                                gutterBottom
                                style={{ fontFamily: "dimis" }}
                            >
                                Search{" "}
                                <span style={{ color: "#6441A4" }}>Twitch</span>{" "}
                                Channels
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                Welcome to Twitch Finder! You can search for any
                                channels to see who is live and some other
                                information.
                            </Typography>
                            {/* CONDITIONAL ERROR MESSAGE */}
                            {errorMessage}
                            <ChannelSearch />
                        </Paper>
                    </Grid>
                    {/* CONDITIONAL FOR IMAGE APPEARING AT HOME PAGE */}
                    {image}
                </Grid>
            </Box>
            <ChannelResults />
        </>
    );
};

export default Home;
