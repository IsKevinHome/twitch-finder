const express = require("express");
const redis = require("redis");
const axios = require("axios").default;
const app = express();
var cron = require("node-cron");
const { validate } = require("node-cron");
require("dotenv").config();
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
client.connect();

let accessToken = "";

async function getToken() {
    const res = await axios
        .post(
            `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
        )
        .then((response) => {
            accessToken = response.data.access_token;
            console.log(accessToken);
        });
}

async function validateToken() {
    const res = await axios
        .get(`https://id.twitch.tv/oauth2/validate`, {
            headers: {
                Authorization: `OAuth ${accessToken}`,
            },
        })
        .then((response) => {
            // return response.data;
            let validateData = response.data.status;
            console.log(validateData);
        });
}

app.use((req, res, next) => {
    // this can be put in a node module.
    cron.schedule("* * * * * *", () => {
        validateToken();
        // getToken();
    });
    next();
});

app.get("/token", (req, res) => {
    // get token once then afterwards the middleware will replace
    getToken();
    res.send({ accessToken });
});

app.listen(5000, () => {
    console.log(`App listening on port 5000`);
});
