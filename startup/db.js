const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://ohianisammy2005:<dasakantimuse1>@cluster0.u6pdi1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => winston.info("Connected to MongoDB..."));
};
