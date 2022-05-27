const { getToken, validateToken } = require("./twitch");
const axios = require("axios").default;
require("dotenv").config();

const CLIENT_SECRET = "mw4j8tbt4u92ze2fr5mtgkh2l47inf";
const CLIENT_ID = "3x4dp9bp0ur9qkf5xdh630z6wkttqy";

let accessToken = "NO TOKEN ASSIGNED YET";

// This is a test node script to see if the validation flow works.

// this works
// getToken(CLIENT_ID, CLIENT_SECRET);
// setInterval(validateToken, 2000);
