import { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const ChannelSearch = () => {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
        console.log(text);
    }
    async function handleSubmit(e) {}
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
                        // value={values.password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment
                                position="end"
                                sx={{ marginRight: "5px" }}
                            >
                                <IconButton
                                    aria-label="toggle"
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
