const winston = require("winston");
const mongoose = require("mongoose");
const config = require("../config/config");

module.exports = function () {
  mongoose
    .connect(config.mongoURI)
    .then(() => winston.info("Connected to MongoDB..."));
};
