const express = require("express");
const redis = require("redis");
const axios = require("axios").default;
const app = express();
var cron = require("node-cron");
require("dotenv").config();

const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
client.connect();

let accessToken;

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
