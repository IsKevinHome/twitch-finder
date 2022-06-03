import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Badge } from "@mui/material";
import Typography from "@mui/material/Typography";

// const channel = {
//     broadcaster_language: "en",
//     broadcaster_login: "artosis",
//     display_name: "Artosis",
//     game_id: "11989",
//     game_name: "StarCraft",
//     id: "6896654",
//     is_live: true,
//     tag_ids: [],
//     thumbnail_url:
//         "https://static-cdn.jtvnw.net/jtv_user_pictures/artosis-profile_image-dc47ab8f7ae1f67b-300x300.jpeg",
//     title: "It's Morbin Time ~ !CORSAIR ~ !gibbon",
//     started_at: "",
// };

const ChannelItem = ({ channel }) => {
    let badgeColor = channel.is_live ? "red" : "#121212";

    return (
        <Badge
            badgeContent={channel.is_live ? "LIVE" : "OFFLINE"}
            sx={{
                "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: badgeColor,
                },
            }}
            // color={channel.is_live ? "error" : "warning"}
        >
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
                            variant="h6"
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
