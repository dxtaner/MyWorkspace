const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: String,
  code: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Country", countrySchema);
