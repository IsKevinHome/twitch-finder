// Dependencies
const express = require("express");
const redis = require("redis");
// const util = require("util"); // built in node utils
// REDIS
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);

async function clientConnect() {
    console.log("connected to redis");
    await client.connect();
}

clientConnect();

const app = express();

// Middleware
app.use(express.json());

// Routing
app.post("/", async (req, res) => {
    // await client.connect();
    const { key, value } = req.body;
    const response = await client.set(key, value);
    res.json(response);
});

app.get("/", async (req, res) => {
    const { key } = req.body;
    const response = await client.get("name");
    res.json(response);
});

app.get("/", (req, res) => {
    res.send("hello!");
});

app.listen(8080, () => {
    console.log("Hey, now listening on port 8080");
});

// 1. Did you start the redis-server?
// 2. This works!
