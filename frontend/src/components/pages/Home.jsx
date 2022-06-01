import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ChannelSearch from "../channels/ChannelSearch";
import gameControl from "../../assets/photos/clipart.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Home = () => {
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
                                Search Twitch Channels
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                Welcome to Twitch Finder! You can search for any
                                channels to see who is live and some other
                                information.
                            </Typography>
                        </Paper>
                        <ChannelSearch />
                    </Grid>

                    <Grid item xs={12} md={6} align="center">
                        <Paper elevation={0} sx={{ maxWidth: 500 }}>
                            <img src={gameControl} style={{ width: "80%" }} />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
