import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import notFound from "../../assets/photos/404.svg";

const NotFound = () => {
    return (
        <>
            <Box sx={{ mx: 5 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="{center"
                    alignItems="center"
                >
                    <Grid item xs={12} align="center">
                        <img
                            src={notFound}
                            style={{ width: "50%" }}
                            alt="404 not found"
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default NotFound;
