const cors = require("cors")
const express = require("express")
const jsonParser = express.json()
const {frontendURL} = require("../../configuration")
const corsSettings = cors({
    origin: frontendURL,
    optionsSuccessStatus: 200,
})
module.exports = [corsSettings, jsonParser]