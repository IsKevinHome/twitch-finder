const express = require("express");
const redis = require("redis");
const axios = require("axios").default;
const app = express();
require("dotenv").config();

const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);
client.connect();

let accessToken;

function makeClientCred() {
    axios
        .post(
            "https://id.twitch.tv/oauth2/token?client_id=3x4dp9bp0ur9qkf5xdh630z6wkttqy&client_secret=mw4j8tbt4u92ze2fr5mtgkh2l47inf&grant_type=client_credentials",
            {
                headers: {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    grant_type: "client_credentials",
                },
            }
        )
        .then((response) => {
            console.log(response.access_token);
            accessToken = response.access_token;
        });
}

function validate(req, res, next) {
    axios
        .get("https://id.twitch.tv/oauth2/validate", {
            headers: {
                Authorization: `OAuth ${accessToken}`,
            },
        })
        .then((response) => {
            if (
                response.expires_in <= 3600 ||
                response.status === 401 ||
                !accessToken
            ) {
                console.log(
                    "Token is Ok but less than an hour left on it, will remake"
                );
                makeClientCred();
            }
        });
}

async function twitchCache(req, res, next) {
    validate();
    next();
}

async function getChannels(req, res, next) {
    const { channelName } = req.params;
    const response = await axios
        .get(
            `https://api.twitch.tv/helix/search/channels?query=${channelName}`,
            {
                headers: {
                    "Client-Id": "3x4dp9bp0ur9qkf5xdh630z6wkttqy",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        .then((response) => {
            res.json(response.data);
        });
}

app.get("/search/:channelName", twitchCache, getChannels);

app.listen(5000, () => {
    console.log(`App listening on port 5000`);
});
