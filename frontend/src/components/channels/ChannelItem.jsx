import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Badge } from "@mui/material";
import Typography from "@mui/material/Typography";

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
        >
            <Card
                sx={{
                    width: 200,
                    maxHeight: 200,
                    backgroundColor: "#121212",
                }}
                elevation={3}
            >
                <CardActionArea
                    href={`https://www.twitch.tv/${channel.broadcaster_login}`}
                    target="none"
                >
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
