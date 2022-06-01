import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ChannelSearch from "../channels/ChannelSearch";
import searchImage from "../../assets/photos/blueSearch.jpg";
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
                            >
                                SEARCH
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quos blanditiis tenetur unde
                                suscipit, quam beatae rerum inventore
                                consectetur, neque doloribus, cupiditate numquam
                                dignissimos laborum fugiat deleniti? Eum quasi
                                quidem quibusdam.
                            </Typography>
                        </Paper>
                        <ChannelSearch />
                    </Grid>

                    <Grid item xs={12} md={6} align="center">
                        <Paper
                            elevation={0}
                            sx={{ maxWidth: 500, textAlign: "left" }}
                        >
                            <Typography
                                variant="h5"
                                component="h1"
                                gutterBottom
                            >
                                SEARCH
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quos blanditiis tenetur unde
                                suscipit, quam beatae rerum inventore
                                consectetur, neque doloribus, cupiditate numquam
                                dignissimos laborum fugiat deleniti? Eum quasi
                                quidem quibusdam.
                            </Typography>
                        </Paper>
                        <ChannelSearch />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
