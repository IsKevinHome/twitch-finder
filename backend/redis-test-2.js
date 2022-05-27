const redis = require("redis");
const express = require("express");
const axios = require("axios").default;

const USER_NAME = "username";
const PORT = 8080;
const REDIS_PORT = 6379;

const client = redis.createClient({
    url: "redis://127.0.0.1:6379",
});

async function clientConnect() {
    console.log("connected");
    await client.connect();
}

clientConnect();

const app = express();

function formatOutput(username, numOfRepos) {
    return `${username} has ${numOfRepos} repos`;
}

async function getRepos(req, res) {
    try {
        const username = req.params(USER_NAME);

        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const { public_repos } = await response.json();

        // Cache data to redis
        client.set(username, public_repos);

        res.send(formatOutput(username, public_repos));
    } catch (err) {
        console.error(err);
        res.status(404);
    }
}

// Cache middleware
function cache(req, res, next) {
    const username = req.params[USER_NAME];
    client.get(username, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(formatOutput(username, data));
        } else {
            next();
        }
    });
}

app.get(`/repos/:${USER_NAME}`, cache, getRepos);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
