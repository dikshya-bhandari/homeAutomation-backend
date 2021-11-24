const express = require("express");
const app = express();
const appliances = require("./appliances");
app.use("/appliances", appliances);
module.exports = app;
