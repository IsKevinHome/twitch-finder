const { getToken, validateToken, twitchSearch } = require("./twitch.js");
const axios = require("axios").default;
require("dotenv").config();
var cron = require("node-cron");

////////////////////////////////////////// REDIS //////////////////////////////////////////
// const redis = require("redis");
// const redisUrl = "redis://127.0.0.1:6379";
// const client = redis.createClient(redisUrl);

// async function clientConnect() {
//     console.log("connected to redis");
//     await client.connect();
// }

// clientConnect();
////////////////////////////////////////// REDIS //////////////////////////////////////////

const CLIENT_SECRET = "mw4j8tbt4u92ze2fr5mtgkh2l47inf";
const CLIENT_ID = "3x4dp9bp0ur9qkf5xdh630z6wkttqy";

// async function getToken(CLIENT_ID, CLIENT_SECRET) {
//     const res = axios
//         .post(
//             `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
//         )
//         .then((res) => {
//             const { access_token } = res.data;
//             const key = "access_token";
//             client.set(key, access_token);
//         });
// }

// async function getRedisToken() {
//     await getToken(CLIENT_ID, CLIENT_SECRET);
//     let token = await client.get("access_token");
//     console.log("token:", token);
// }

// async function validateToken() {
//     const access_token = await client.get("access_token");
//     const res = axios
//         .get(`https://id.twitch.tv/oauth2/validate`, {
//             headers: {
//                 Authorization: `OAuth ${access_token}`,
//             },
//         })
//         .then((response) => {
//             if (response.data.expires_in < 3600) {
//                 getToken(CLIENT_ID, CLIENT_SECRET);

//                 console.log(`REQUESTED NEW TOKEN (3600): ${access_token}`);
//             } else {
//                 console.log("Token is still active and valid");
//             }
//         })
//         .catch((error) => {
//             if (error.response.data.status === 401) {
//                 getToken(CLIENT_ID, CLIENT_SECRET);
//                 console.log(
//                     `ERROR 401... REQUESTED NEW TOKEN: ${access_token}`
//                 );
//             } else {
//                 console.log("ERROR:", error.response.data);
//             }
//         });
// }

// async function twitchSearch(query) {
//     const access_token = await client.get("access_token");
//     const res = axios
//         .get(`https://api.twitch.tv/helix/search/channels?query=${query}`, {
//             headers: {
//                 Authorization: `Bearer ${access_token}`,
//                 "Client-Id": CLIENT_ID,
//             },
//         })
//         .then((res) => {
//             // this just gets the first result, there are two data returns since axios return data
//             data = res.data.data[0];
//             console.log(data);
//         });
// }

// every 15 seconds
cron.schedule("*/15 * * * * *", () => {
    // getRedisToken();
    getToken(CLIENT_ID, CLIENT_SECRET);

    validateToken();
    twitchSearch("tasteless", CLIENT_ID);
});
