const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
  code: String,
  visited: { type: Boolean, default: false },
});

module.exports = mongoose.model("Country", countrySchema);
