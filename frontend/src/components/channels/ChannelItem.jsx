import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Badge } from "@mui/material";
import Typography from "@mui/material/Typography";

const channel = {
    broadcaster_language: "en",
    broadcaster_login: "artosis",
    display_name: "Artosis",
    game_id: "11989",
    game_name: "StarCraft",
    id: "6896654",
    is_live: false,
    tag_ids: [],
    thumbnail_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/artosis-profile_image-dc47ab8f7ae1f67b-300x300.jpeg",
    title: "It's Morbin Time ~ !CORSAIR ~ !gibbon",
    started_at: "",
};

//  add a link to channel]
// live marker

const ChannelItem = () => {
    return (
        <Badge badgeContent={"LIVE"} color="error">
            <Card
                sx={{
                    width: 200,
                    maxHeight: 200,
                    backgroundColor: "#121212",
                }}
                elevation={3}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={channel.thumbnail_url}
                    />{" "}
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "dimis",
                            }}
                        >
                            {channel.display_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Badge>
    );
};

export default ChannelItem;
