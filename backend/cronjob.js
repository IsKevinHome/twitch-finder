const { getToken, validateToken } = require("./twitch");
const axios = require("axios").default;
require("dotenv").config();

const CLIENT_SECRET = "mw4j8tbt4u92ze2fr5mtgkh2l47inf";
const CLIENT_ID = "3x4dp9bp0ur9qkf5xdh630z6wkttqy";

let accessToken = "NO TOKEN ASSIGNED YET";

// function getToken() {
//     const res = axios
//         .post(
//             `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
//         )
//         .then((response) => {
//             accessToken = response.data.access_token;
//             console.log("Get Token");
//         });
// }

// function validateToken() {
//     const res = axios
//         .get(`https://id.twitch.tv/oauth2/validate`, {
//             headers: {
//                 Authorization: `OAuth ${accessToken}`,
//             },
//         })
//         .then((response) => {
//             if (response.data.expires_in < 3600) {
//                 getToken();
//                 console.log(`REQUESTED NEW TOKEN (3600): ${accessToken}`);
//             } else {
//                 console.log("Token is still active and valid");
//             }
//         })
//         .catch((error) => {
//             if (error.response.data.status === 401) {
//                 getToken();
//                 console.log(`ERROR 401... REQUESTED NEW TOKEN: ${accessToken}`);
//             } else {
//                 console.log("ERROR:", error.response.data);
//             }
//         });
// }

// this works
getToken(CLIENT_ID, CLIENT_SECRET);
setInterval(validateToken, 2000);
