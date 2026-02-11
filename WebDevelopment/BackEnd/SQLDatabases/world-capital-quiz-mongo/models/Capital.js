const mongoose = require("mongoose");

const capitalSchema = new mongoose.Schema({
  country: String,
  capital: String,
});

module.exports = mongoose.model("Capital", capitalSchema);
