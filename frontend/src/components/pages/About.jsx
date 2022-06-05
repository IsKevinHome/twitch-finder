import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const About = () => {
    return (
        <Box sx={{ mx: 5 }}>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 10 }}
            >
                <Grid item md={6} align="center">
                    <Typography variant="h4" component="h1">
                        Twitch Finder
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 3 }}>
                        Twitch Finder is an application that uses the{" "}
                        <Button
                            color="secondary"
                            href="https://dev.twitch.tv/docs/api/"
                            size="small"
                        >
                            Twitch developer API
                        </Button>{" "}
                        to perform a search query on channels, and to see if
                        those channels are currently streaming. Built with
                        React, Node, and Redis.
                    </Typography>
                    <Button
                        href="https://github.com/IsKevinHome/twitch-finder"
                        target="none"
                        variant="contained"
                        size="large"
                        color="secondary"
                    >
                        GitHub Repository
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
