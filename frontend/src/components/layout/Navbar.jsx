import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ backgroundColor: "white" }}>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { md: "flex" },
                                fontFamily: "dimis",
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            Twitch Finder
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>

                        <Button
                            sx={{
                                fontFamily: "dimis",
                                color: "black",
                                fontSize: 20,
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            sx={{
                                fontFamily: "dimis",
                                color: "black",
                                fontSize: 20,
                            }}
                        >
                            About
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* dont delete this (it's the alternate when we scroll) */}
            <Toolbar />
            {/* <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(22)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join("\n")}
                </Box>
            </Container> */}
        </React.Fragment>
    );
}
