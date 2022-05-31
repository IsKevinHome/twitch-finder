const { getToken, validateToken, twitchSearch } = require("./twitch.js");
const express = require("express");
const redis = require("redis");
const axios = require("axios").default;
const app = express();
var cron = require("node-cron");
require("dotenv").config();

// const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
client.connect();

// MIDDLEWARE
// Validation middleware
app.use((req, res, next) => {
    // this can be put in a node module.
    cron.schedule("*/1 * * * *", () => {
        validateToken();
    });
    next();
});

// Get token route
app.get("/token", (req, res) => {});

// Search route
app.get("/search/:channels", async (req, res) => {
    const { channels } = req.params;
    const results = await twitchSearch(channels, CLIENT_ID);
    // console.log(results);
    res.send(results);
});

app.listen(5000, () => {
    console.log(`App listening on port 5000`);
});
