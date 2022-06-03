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
    const { text } = useContext(TwitchContext);

    return (
        <>
            <CssBaseline />
            <Box sx={{ mx: 5 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: "calc(100vh - 64px" }}
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
                            <ChannelSearch />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} align="center">
                        <Paper elevation={0} sx={{ maxWidth: 500 }}>
                            <img
                                src={gameControl}
                                alt="game controllers dangling"
                                style={{ width: "80%" }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <ChannelResults />
        </>
    );
};

export default Home;
