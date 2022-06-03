import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
//
import TwitchContext from "../../context/TwitchContext";
import axios from "axios";

const ChannelSearch = () => {
    const { text, setText } = useContext(TwitchContext);
    const { channels, setChannels } = useContext(TwitchContext);

    const searchChannels = async (text) => {
        const response = await axios
            .get(`http://localhost:5000/search/${text}`)
            .then((response) => {
                setChannels(response.data);
                console.log(response.data);
                // return response.data;
            });
    };

    function handleChange(e) {
        setText(e.target.value);
    }

    async function handleSubmit(e) {
        // e.preventDefault();
        const data = await searchChannels(text);
        setText("");
    }
    return (
        <>
            <Box sx={{ width: 500, maxWidth: "100%", pt: 2 }}>
                <FormControl
                    fullWidth
                    // sx={{ width: 500 }}
                    variant="outlined"
                    color="secondary"
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        search
                    </InputLabel>
                    <OutlinedInput
                        // type={values.showPassword ? "text" : "password"}
                        value={text}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment
                                position="end"
                                sx={{ marginRight: "5px" }}
                            >
                                <IconButton
                                    aria-label="toggle"
                                    // SET THE ON CLICK TO CHANGE STATE
                                    onClick={handleSubmit}
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
        </>
    );
};

export default ChannelSearch;
